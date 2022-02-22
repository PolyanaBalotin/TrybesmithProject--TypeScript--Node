import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserServicer from '../services/UserService';

export const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  await UserServicer.create({ username, classe, level, password });
  const token = jwt.sign({ username }, process.env.JWT_SECRET || 'segredo');
  return res.status(201).json({ token });
};

export default {
  createUser,
};