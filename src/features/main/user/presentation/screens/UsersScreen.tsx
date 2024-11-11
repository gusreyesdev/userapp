import { UserCard } from "../components/UserCard";
import { Loader } from "../../../../../app/presentation";
import { useUsers } from "../hooks/useUsers";

export const UsersScreen = () => {
  const { isLoading, data, isError } = useUsers();

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
        <p> Error to getting Users </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-wrap sm:flex-row ">
      {data?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
