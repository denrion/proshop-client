import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Rating } from '../../app/components/Rating';
import { IProduct } from './IProduct';

interface IProductProps {
  product: IProduct;
}

export const ProductItem: React.FC<IProductProps> = props => {
  const { product } = props;
  const { id, name, image, rating, numReviews, price } = product;

  const ratingText = `${numReviews} reviews`;

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${id}`}>
        <Card.Img src={image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={rating} text={ratingText} />
        </Card.Text>

        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
