import express from 'express';
import { createUser } from './controllers/UserController';
import { validateUsername,
  validateClasse,
  validateLevel,
  validatePassword } from './middlewares/UserValidations';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClasse, validateLevel, validatePassword, createUser);

export default app;
