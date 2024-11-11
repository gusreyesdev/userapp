import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

export interface UserLikeCreate {
  id?: number;
  name: string;
  lastname: string;
  username: string;
  gender: string;
  image:string;
  email: string;
  password: string
}

export const createUser = async (  user: UserLikeCreate) => {
  const { data } = await userApi.post<User>(`/auth/register`, user);

  return data;
};
