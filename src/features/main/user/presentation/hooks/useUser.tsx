import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../../../../actions";

export const useUser = (userId: number) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserById(userId),
    staleTime: 1000 * 60,
  });

  return {
    isLoading,
    data,
    isError,
  };
};
