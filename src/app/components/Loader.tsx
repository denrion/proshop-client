import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      {' '}
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};
