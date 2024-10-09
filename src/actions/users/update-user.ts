import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

export interface UserLikeUpdate {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  gender: string;
}

export const updateUser = async (user: UserLikeUpdate) => {
  const { data } = await userApi.patch<User>(`/users/${user.id}`, {
    ...user,
  });

  return data;
};
