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
          <p>{data?.email}</p>
        </CardContent>
      </Card>
    </div>
  );
};
