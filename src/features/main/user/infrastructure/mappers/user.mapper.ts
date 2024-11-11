import { User } from "../../domain/user";
import { UsersResponse } from "../interfaces/users.response";

export class UserMapper {
  static userResponseToUser(data: UsersResponse): User {
    return {
      id: data.id,
      name: data.name,
      lastname: data.lastname,
      username: data.username,
      gender: data.gender,
      image: data.image,
      email: data.email,
      password: data.password
    };
  }
}
