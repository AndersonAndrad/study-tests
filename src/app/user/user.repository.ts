import {
  ICreateUser,
  IUser,
} from '../../infra/interfaces/user/createUser.interface';

export const USER_REPOSITORY = Symbol('user_repository');

export interface IUserRepository {
  create(createUser: ICreateUser): Promise<IUser>;

  getUser(userId: string): Promise<IUser>;
}
