import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ProductItem } from './ProductItem';
import { IProduct } from '../types/product';

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { products } = props;

  if (products.length === 0) {
    return <h3>No products found</h3>;
  }

  const productsToRender = products.map((product) => (
    <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
      <ProductItem product={product} />
    </Col>
  ));

  return <Row>{productsToRender}</Row>;
};
