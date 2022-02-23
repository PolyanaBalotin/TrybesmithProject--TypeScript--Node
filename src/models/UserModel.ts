import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { IUser, LoginInterface, User } from './IUser';

const createUser = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  const { insertId: id } = result;

  const insertedUser: User = { id, username, classe, level, password };

  return insertedUser;
};

const userLogin = async (login: LoginInterface) => {
  const { username, password } = login;
  const [result] = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );
  return result;
};

export default {
  createUser,
  userLogin,
};