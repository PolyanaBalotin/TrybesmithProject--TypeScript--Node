import UserModel from '../models/UserModel';
import { IUser, LoginInterface } from '../models/IUser';

const createUser = async ({ username, classe, level, password }: IUser) => {
  const user = await UserModel.createUser({ username, classe, level, password });
  return user;
};

const userLogin = async ({ username, password }: LoginInterface) => {
  const user = await UserModel.userLogin({ username, password });
  return user;
};

export default {
  createUser,
  userLogin,
};
