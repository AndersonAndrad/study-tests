import { UserController } from '../../../app/user/user.controller';
import {
  ClassUserEnum,
  ICreateUser,
} from '../../interfaces/user/createUser.interface';
import { UserService } from '../../../app/user/user.service';
import { faker } from '@faker-js/faker';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    userController = new UserController(userService);
  });

  it('should return created user', async () => {
    const userToCreate: ICreateUser = {
      age: Number(faker.random.numeric(2)),
      class: ClassUserEnum.COMMON,
      email: faker.internet.email(),
      name: faker.name.fullName(),
    };

    const user = await userController.create(userToCreate);

    expect(user).toEqual({ ...userToCreate, id: user.id });
  });
});
