import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";

import { User } from "../../domain/user";
import { Button } from "../../../../../components/ui/button";

import { UserPen, UserMinus2 } from "lucide-react";
import React from "react";
import { useUserMutationDelete } from "../hooks/useUserMutation";
import { Loader } from "../../../../../app/presentation";

interface Props {
  user: User;
}

export const UserCard = ({ user }: Props) => {
  const navigate = useNavigate();

  const userMutation = useUserMutationDelete();

  const onDetails = (user: User, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate("details", { state: { userId: user.id } });
  };

  const onUpdate = (user: User, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate("update-user", { state: { user: user } });
  };

  const onDelete = (user: User, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    userMutation.mutate(user);
  };

  if (userMutation.isPending) {
    return (
      <div className="flex grow justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <Card
      onClick={(e) => onDetails(user, e)}
      className="mb-2 sm:mb-0 mr-2 mt-2"
    >
      <CardHeader>
        <CardTitle> {user.name} </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{user.lastname}</p>
      </CardContent>

      <CardFooter>
        <Button
          onClick={(e) => onUpdate(user, e)}
          variant="outline"
          size="icon"
        >
          <UserPen className="h-4 w-4" />
        </Button>

        <Button
          onClick={(e) => onDelete(user, e)}
          variant="outline"
          size="icon"
        >
          <UserMinus2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
