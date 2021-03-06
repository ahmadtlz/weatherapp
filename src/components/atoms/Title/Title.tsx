import React, { FC } from 'react';
import TitleStyle from './Title.styled';

export interface Props {
  title:string |number;
}
const Title:FC<Props> = ({ title }:Props) => (
  <TitleStyle>
    {title}
  </TitleStyle>
);

export default Title;
