import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ProductItem } from './ProductItem';
import { IProduct } from './IProduct';

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = props => {
  const { products } = props;

  const productsToRender = products.map(product => (
    <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
      <ProductItem product={product} />
    </Col>
  ));

  return <Row>{productsToRender}</Row>;
};
