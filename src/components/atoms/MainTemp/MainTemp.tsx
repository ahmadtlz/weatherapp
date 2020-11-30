import React, { FC } from 'react';

interface Props {
  mainTemp:number;
}

const MainTemp:FC<Props> = ({ mainTemp }:Props) => (
  <p>
    {mainTemp}
  </p>
);

export default MainTemp;
