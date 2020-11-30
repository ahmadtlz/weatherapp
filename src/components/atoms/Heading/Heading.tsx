import React, { FC, ReactNode } from 'react';
import HeadingStyle from './Heading.styled';

interface Props {
  desc:string
}

const Heading:FC<Props> = ({ desc }:Props) => (
  <HeadingStyle>
    {desc}
  </HeadingStyle>
);

export default Heading;
