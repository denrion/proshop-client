import axios from '../../app/api/axios';
import { IProduct } from './IProduct';
import {
  IApiPaginationResponse,
  IApiSuccessResponse,
} from '../../app/types/response';

export const fetchProducts = () => {
  return axios.get<IApiPaginationResponse<IProduct>>('/products');
};

export const fetchProductById = (id: string) => {
  return axios.get<IApiSuccessResponse<IProduct>>(`/products/${id}`);
};
