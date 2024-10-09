import { userApi } from "../../config";
import { User } from "../../features/main/user/domain/user";

import {
  UserMapper,
  UsersResponse,
} from "../../features/main/user/infrastructure";

export const getUserById = async (id: number): Promise<User> => {
  try {
    const { data } = await userApi.get<UsersResponse>(`/users/${id}`);

    return UserMapper.userResponseToUser(data);
    
  } catch (error) {
    console.log("error get users", error);
    throw new Error(`Error getting user by id: ${id}`);
  }
};
