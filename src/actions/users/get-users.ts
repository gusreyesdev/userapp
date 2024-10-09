import { userApi } from "../../config";

import {
  UserMapper,
  UsersResponse,
} from "../../features/main/user/infrastructure";

import { User } from "../../features/main/user/domain/user";

export const getUsers = async (): Promise<User[]> => {
  try {
    const { data } = await userApi.get<UsersResponse[]>("/users");

    const users = data.map(UserMapper.userResponseToUser);

    return users;

  } catch (error) {
    console.log("error get users", error);
    throw new Error("Error getting users");
  }
};
