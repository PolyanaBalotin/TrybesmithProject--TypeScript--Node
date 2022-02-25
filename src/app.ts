import express from 'express';
import { createProduct } from './controllers/ProductsController';
import { createUser, userLogin } from './controllers/UserController';
import { validateUsername,
  validateClasse,
  validateLevel,
  validatePassword, 
  validateLogin } from './middlewares/UserValidations';
import { validateToken } from './middlewares/TokenValidation';
import { validateName, validateAmount } from './middlewares/ProductsValidation';

const app = express();

app.use(express.json());

app.post('/users', validateUsername, validateClasse, validateLevel, validatePassword, createUser);
app.post('/login', validateLogin, userLogin);
app.post('/products', validateToken, validateName, validateAmount, createProduct);

export default app;
