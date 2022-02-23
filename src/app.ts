import express from 'express';
import { createUser, userLogin } from './controllers/UserController';
import { validateUsername,
  validateClasse,
  validateLevel,
  validatePassword, 
  validateLogin } from './middlewares/UserValidations';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClasse, validateLevel, validatePassword, createUser);
app.post('/login', validateLogin, userLogin);

export default app;
