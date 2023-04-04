import { UserController } from '../../../app/user/user.controller';
import {
  ClassUserEnum,
  ICreateUser,
} from '../../interfaces/user/createUser.interface';
import { UserService } from '../../../app/user/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
    userController = new UserController(userService);
  });

  it('should return created user', async () => {
    const userToCreate: ICreateUser = {
      age: 18,
      class: ClassUserEnum.COMMON,
      email: 'user@email.com',
      name: 'user-name',
    };

    const user = await userController.create(userToCreate);

    expect(user).toEqual({ ...userToCreate, id: user.id });
  });
});
