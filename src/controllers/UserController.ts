import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserServicer from '../services/UserServicer';

export const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  await UserServicer.createUser({ username, classe, level, password });
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'segredo');
  return res.status(201).json({ token });
};

export const userLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserServicer.userLogin({ username, password });
  if (!Object.keys(user).length) {
    return res.status(401).json({ error: 'Username or password invalid' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'segredo');
  return res.status(200).json({ token });
};
