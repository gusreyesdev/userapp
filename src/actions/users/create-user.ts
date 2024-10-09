import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

export interface UserLikeCreate {
  id?: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  gender: string;
}

export const createUser = async (user: UserLikeCreate) => {
  const { data } = await userApi.post<User>(`/users`, user);

  return data;
};
