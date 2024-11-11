import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

export interface UserLikeUpdate {
  id: number;
  values: {
    name: string;
    lastname: string;
    username: string;
    gender: string;
    image: string;
    email: string;
  };
}

export const updateUser = async (user: UserLikeUpdate) => {

  const { data } = await userApi.patch<User>(`/users/${user.id}`, {
    ...user.values,
  });

  return data;
};
