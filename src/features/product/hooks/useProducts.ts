import { useQuery } from 'react-query';

import { useAppDispatch } from '../../../app/hooks';
import { ReactQueryKeys } from '../../../app/types/request';
import {
  IApiErrorResponse,
  IPaginatedResponse,
} from '../../../app/types/response';
import { fetchProducts } from '../productAPI';
import { listProducts } from '../productSlice';
import { IProduct } from '../types/product';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  return useQuery<IPaginatedResponse<IProduct>, IApiErrorResponse>(
    ReactQueryKeys.PRODUCTS,
    fetchProducts,
    {
      onSuccess: (data) => {
        dispatch(listProducts(data));
      },
    }
  );
};
