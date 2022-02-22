import express from 'express';
import { createUser } from './controllers/UserController';

const app = express();

app.use(express.json());

app.post('/users', createUser);

export default app;
