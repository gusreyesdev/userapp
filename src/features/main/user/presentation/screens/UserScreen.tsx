import { Loader } from "../../../../../app/presentation";
import { useLocation } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";

import { useUser } from "../hooks/useUser";

import { User2Icon, MailIcon } from "lucide-react";
import { Badge } from "../../../../../components/ui/badge";

export const UserScreen = () => {
  const { state } = useLocation();

  const { isLoading, data, isError } = useUser(state.userId);

  if (isLoading) {
    return (
      <div className="flex justify-center ">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center">
        <p> Error to getting User Data </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card>
        <CardHeader>
          <CardTitle>{data?.name}</CardTitle>
          <CardDescription>{data?.lastname}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <User2Icon className="h-4 w-4  self-center" />
            <p> {data?.username}</p>
          </div>

          <div className="flex">
            <MailIcon className="h-4 w-4 self-center" />
            <p> {data?.email}</p>
          </div>

          <div>
          <Badge variant="outline">{data?.gender}</Badge>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};
