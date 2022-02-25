import { IProducts } from '../models/Interfaces';
import ProductsModel from '../models/ProductsModel';

const createProduct = async ({ name, amount }: IProducts) => {
  const product = await ProductsModel.createProduct({ name, amount });
  return product;
};

export default { 
  createProduct,
};