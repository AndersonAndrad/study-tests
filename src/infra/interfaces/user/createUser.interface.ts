export interface IUser {
  id: string;
  email: string;
  name: string;
  age: number;
  userClass: ClassUserEnum;
}

export type ICreateUser = Omit<IUser, 'id'>;

export type IUpdateUser = Partial<ICreateUser>;

export enum ClassUserEnum {
  ADMIN = 'admin',
  COMMON = 'common',
}
