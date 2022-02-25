import { Request, Response } from 'express';
import ProductServicer from '../services/ProductsServicer';

export const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = { name, amount };
  const id = await ProductServicer.createProduct(product);
  return res.status(201).json({ item: { id, ...product } });
};

export default createProduct;