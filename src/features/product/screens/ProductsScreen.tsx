import React from 'react';

import { Loader } from '../../../app/components/UI/Loader';
import { Message } from '../../../app/components/UI/Message';
import { ProductList } from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';

export const ProductsScreen: React.FC = () => {
  // REACT QUERY
  const {
    isLoading,
    isIdle,
    isError,
    error,
    data: productsData = { items: [] },
  } = useProducts();

  // Rendering
  if (isLoading || isIdle) {
    return <Loader />;
  }

  if (isError && error) {
    return <Message variant='danger'>{error.message}</Message>;
  }

  return (
    <>
      <ProductList products={productsData.items} />
    </>
  );
};
