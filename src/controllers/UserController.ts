import { Request, Response } from 'express';
import UserServicer from '../services/UserService';

export const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const data = await UserServicer.create({ username, classe, level, password });
  return res.status(201).json(data);
};

export default {
  createUser,
};