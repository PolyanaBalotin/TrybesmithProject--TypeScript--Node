import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IProducts } from './Interfaces';

const createProduct = async (product: IProducts) => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  
  return result.insertId;
};

const getAllProducts = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return result as IProducts[];
};

export default {
  createProduct,
  getAllProducts,
};