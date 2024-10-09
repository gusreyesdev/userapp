import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, updateUser, deleteUser } from "../../../../../actions";
import Swal from "sweetalert2";

export const useUserMutationPost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      Swal.fire({
        title: "Success",
        text: "User created",
        icon: "success",
      });
    },
    onError: (error: any) => {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  return mutation;
};

export const useUserMutationPatch = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      Swal.fire({
        title: "Success",
        text: "User updated",
        icon: "success",
      });
    },
    onError: (error: any) => {
      console.log("error updated", error);

      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  return mutation;
};

export const useUserMutationDelete = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      Swal.fire({
        title: "Success",
        text: "User deleted",
        icon: "success",
      });
    },
    onError: (error: any) => {
      console.log("error delete", error);

      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
      });
    },
  });

  return mutation;
};
