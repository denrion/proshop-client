import React, { useEffect } from 'react';

import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ProductList } from '../../features/product/ProductList';
import { listProducts } from '../../features/product/productThunks';
import { RequestStatus } from '../types/request';

export const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const productState = useAppSelector((state) => state.product);
  const { status, error, products } = productState;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Rendering
  if (status === RequestStatus.LOADING) {
    return <Loader />;
  }

  if (error) {
    return <Message variant='danger'>{error}</Message>;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <ProductList products={products} />
    </>
  );
};
