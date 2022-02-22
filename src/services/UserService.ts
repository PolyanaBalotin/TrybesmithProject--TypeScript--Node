import UserModel from '../models/UserModel';
import { IUser } from '../models/IUser';

const create = async ({ username, classe, level, password }: IUser) => {
  const user = await UserModel.create({ username, classe, level, password });
  return user;
};

export default {
  create,
};
