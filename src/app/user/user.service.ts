import { Inject, Injectable } from '@nestjs/common';
import { ICreateUser } from '../../infra/interfaces/user/createUser.interface';
import { IUserRepository, USER_REPOSITORY } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: IUserRepository,
  ) {}

  create(createUser: ICreateUser) {
    return this.userRepository.create(createUser);
  }

  getUser(userId: string) {
    return this.userRepository.getUser(userId);
  }

  getUsers() {
    return this.userRepository.getUsers();
  }

  delete(userId: string) {
    this.userRepository.delete(userId);
  }
}
