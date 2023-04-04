import {
  ClassUserEnum,
  ICreateUser,
} from '../../../infra/interfaces/user/createUser.interface';

export class CreateUserDto implements ICreateUser {
  age: number;
  class: ClassUserEnum;
  email: string;
  name: string;
}
