import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../../actions";

export const useUsers = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    staleTime: 1000 * 60,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
