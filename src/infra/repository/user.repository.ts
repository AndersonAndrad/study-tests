import { IUserRepository } from '../../app/user/user.repository';
import {
  ICreateUser,
  IUpdateUser,
  IUser,
} from '../interfaces/user/createUser.interface';
import { HashHelper } from '../helper/hash.helper';

export class UserRepository implements IUserRepository {
  private users: IUser[] = [];

  async create(createUser: ICreateUser): Promise<IUser> {
    const data: IUser = {
      ...createUser,
      id: HashHelper.base64(),
    };

    this.users.push(data);

    return Promise.resolve(data);
  }

  async getUser(userId: string): Promise<IUser> {
    const user = this.users.find(({ id }) => id === userId);

    if (!user) throw new Error('User not found');

    return Promise.resolve(user);
  }

  async getUsers(): Promise<IUser[]> {
    return Promise.resolve(this.users);
  }

  async delete(userId: string): Promise<void> {
    const exists = this.users.find(({ id }) => id === userId);

    if (!exists) throw new Error('User not exists');

    this.users = this.users.filter(({ id }) => id !== userId);
  }

  async update(userId: string, userUpdate: IUpdateUser): Promise<IUser> {
    const user = this.users.find(({ id }) => id === userId);

    if (!user) throw new Error('User not found');

    this.users = this.users.map((user) => {
      if (user.id !== userId) return user;

      const { name, userClass, email, age } = userUpdate;

      user = {
        id: user.id,
        name,
        age,
        userClass,
        email,
      };

      return user;
    });

    return this.users.find(({ id }) => id === userId);
  }
}
