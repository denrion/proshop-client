import { useQuery } from 'react-query';
import { useAppDispatch } from '../../../app/hooks';

import { ReactQueryKeys } from '../../../app/types/request';
import { IApiErrorResponse } from '../../../app/types/response';
import { fetchProductById } from '../productAPI';
import { listProductDetails } from '../productSlice';
import { IProduct } from '../types/product';

export const useProduct = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();

  return useQuery<IProduct, IApiErrorResponse>(
    [ReactQueryKeys.PRODUCT, productId],
    () => fetchProductById(productId),
    {
      enabled: !!productId,
      onSuccess: (data) => {
        dispatch(listProductDetails(data));
      },
    }
  );
};
