import React from 'react';

import { ProductsScreen } from '../../features/product/screens/ProductsScreen';

export const HomeScreen: React.FC = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <ProductsScreen />
    </>
  );
};
