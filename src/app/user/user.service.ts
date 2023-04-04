import { Injectable } from '@nestjs/common';
import {
  ICreateUser,
  IUser,
} from '../../infra/interfaces/user/createUser.interface';

@Injectable()
export class UserService {
  async create(createUser: ICreateUser) {
    const createdUser: IUser = {
      ...createUser,
      id: '0001',
    };

    return createdUser;
  }
}
