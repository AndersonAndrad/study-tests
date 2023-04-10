import { Injectable } from "@nestjs/common";
import {
  ICreateUser,
  IUser
} from "../../infra/interfaces/user/createUser.interface";
import { HashHelper } from "../../infra/helper/hash.helper";

@Injectable()
export class UserService {
  private users: IUser[] = [];

  async create(createUser: ICreateUser) {
    const createdUser: IUser = {
      ...createUser,
      id: HashHelper.base64()
    };

    this.users.push(createdUser);

    return createdUser;
  }

  async getUser(userId: string) {
    const user = this.users.find((user) => user.id === userId);

    if (!user) throw new Error("User not found");

    return user;
  }

  async getUsers() {
    return this.users;
  }
}
