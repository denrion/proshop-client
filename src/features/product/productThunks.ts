import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { fetchProducts, fetchProductById } from './productAPI';
import {
  IApiErrorResponse,
  IPaginatedResponseDTO,
} from '../../app/types/response';
import { IProduct } from './IProduct';

export const listProducts = createAsyncThunk<
  IPaginatedResponseDTO<IProduct>,
  void,
  { rejectValue: IApiErrorResponse }
>('product/listProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchProducts();
    return response.data.data;
  } catch (err) {
    const error: AxiosError<IApiErrorResponse> = err;

    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

export const listProductDetails = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: IApiErrorResponse }
>('product/listProductDetails', async (id: string, { rejectWithValue }) => {
  try {
    const response = await fetchProductById(id);
    return response.data.data;
  } catch (err) {
    const error: AxiosError<IApiErrorResponse> = err;

    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});
