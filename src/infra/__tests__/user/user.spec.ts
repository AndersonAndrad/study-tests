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

  beforeAll(() => {
    userService = new UserService();
    userController = new UserController(userService);
  });

  const userToCreate: ICreateUser = {
    age: Number(faker.random.numeric(2)),
    class: ClassUserEnum.COMMON,
    email: faker.internet.email(),
    name: faker.name.fullName(),
  };

  it('should created user', async () => {
    const user = await userController.create(userToCreate);

    expect(user).toEqual({ ...userToCreate, id: user.id });
  });

  it('should return user created', async () => {
    const user = await userController.create(userToCreate);

    const userFound = await userController.getUser(user.id);

    expect(user.id).toEqual(userFound.id);
  });

  it('should return an error when not finding the user', () => {
    const userId = 'non-existent-id';
    const tryFindUser = async () => await userController.getUser(userId);

    expect(tryFindUser).rejects.toThrow(Error('User not found'));
  });
});
