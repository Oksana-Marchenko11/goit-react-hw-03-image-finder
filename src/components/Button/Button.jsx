import React from 'react';
import { ButtonLoad } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonLoad onClick={loadMore}>Load more</ButtonLoad>;
};
