import React from 'react';
import { Alert } from 'react-bootstrap';

interface MessageProps {
  variant?: string;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { variant, children } = props;

  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};
