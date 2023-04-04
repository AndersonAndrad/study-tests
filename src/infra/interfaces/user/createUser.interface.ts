export interface IUser {
  id: string;
  email: string;
  name: string;
  age: number;
  class: ClassUserEnum;
}

export type ICreateUser = Omit<IUser, 'id'>;

export enum ClassUserEnum {
  ADMIN = 'admin',
  COMMON = 'common',
}
