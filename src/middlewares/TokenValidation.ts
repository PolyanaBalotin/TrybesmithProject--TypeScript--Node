import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ error: 'Token not found' });
  try {
    jwt.verify(token, process.env.JWT_SECRET || 'segredo');
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;