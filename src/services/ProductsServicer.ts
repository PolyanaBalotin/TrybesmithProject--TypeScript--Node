import { IProducts } from '../models/Interfaces';
import ProductsModel from '../models/ProductsModel';

const createProduct = async ({ name, amount }: IProducts) => {
  const product = await ProductsModel.createProduct({ name, amount });
  return product;
};

const getAllProducts = async () => {
  const products = await ProductsModel.getAllProducts();
  return products;
};

export default { 
  createProduct,
  getAllProducts,
};