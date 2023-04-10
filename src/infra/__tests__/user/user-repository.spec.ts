import {
  ClassUserEnum,
  ICreateUser,
} from '../../interfaces/user/createUser.interface';
import { faker } from '@faker-js/faker';
import { UserRepository } from '../../repository/user.repository';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  const userToCreate: ICreateUser = {
    age: Number(faker.random.numeric(2)),
    userClass: ClassUserEnum.COMMON,
    email: faker.internet.email(),
    name: faker.name.fullName(),
  };

  describe('Create user', () => {
    it('should created user', async () => {
      const user = await userRepository.create(userToCreate);

      expect(user).toEqual({ ...userToCreate, id: user.id });
    });
  });

  describe('Get user', () => {
    it('should return user created', async () => {
      const user = await userRepository.create(userToCreate);

      const userFound = await userRepository.getUser(user.id);

      expect(user.id).toEqual(userFound.id);
    });

    it('should return an error when not finding the user', () => {
      const userId = 'non-existent-id';
      const tryFindUser = async () => await userRepository.getUser(userId);

      expect(tryFindUser).rejects.toThrow(Error('User not found'));
    });

    it('should return all users', async () => {
      await userRepository.create(userToCreate);

      const users = await userRepository.getUsers();

      expect(users).toHaveLength(1);
    });
  });

  describe('Delete user', () => {
    it('should delete user', async () => {
      const user = await userRepository.create(userToCreate);

      await userRepository.delete(user.id);

      const response = async () => await userRepository.getUser(user.id);

      await expect(response).rejects.toThrow();
    });

    it('should return error when not exists user', async () => {
      const response = async () => await userRepository.delete('non-exists-id');

      await expect(response).rejects.toThrow();
    });
  });

  describe('Update user', () => {
    it('should update user', async () => {
      let user = await userRepository.create(userToCreate);

      user = {
        name: 'updated-name',
        ...user,
      };

      const updatedUser = await userRepository.update(user.id, user);

      expect(updatedUser.name).toStrictEqual(user.name);
    });

    it('should try update nonexistent user', async () => {
      const response = async () =>
        await userRepository.update('non-existent-id', userToCreate);

      await expect(response).rejects.toThrow();
    });
  });
});
