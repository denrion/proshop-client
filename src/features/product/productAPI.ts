import axios from '../../app/api/axios';
import {
  IApiPaginationResponse,
  IApiSuccessResponse,
} from '../../app/types/response';
import { IProduct } from './types/product';

export const fetchProducts = async () => {
  const response = await axios.get<IApiPaginationResponse<IProduct>>(
    '/products'
  );

  return response.data.data;
};

export const fetchProductById = async (id: string) => {
  const response = await axios.get<IApiSuccessResponse<IProduct>>(
    `/products/${id}`
  );

  return response.data.data;
};
