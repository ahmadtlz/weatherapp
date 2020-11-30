import React, { FC, ReactNode } from 'react';
import CardStyle from './Card.styled';

interface Props {
  children:ReactNode
}
const Card:FC<Props> = ({ children }:Props) => (
  <CardStyle>
    {children}
  </CardStyle>
);

export default Card;
