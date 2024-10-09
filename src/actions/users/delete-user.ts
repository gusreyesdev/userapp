import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

export interface UserLikeDelete {
  id: number;
}

export const deleteUser = async (user: UserLikeDelete) => {
  const { data } = await userApi.delete<User>(`/users/${user.id}`);

  return data;
};
