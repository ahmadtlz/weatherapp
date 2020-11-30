import React, { FC } from 'react';

interface Props {
  celsius:string;
}

const Celsius:FC<Props> = ({ celsius }:Props) => (
  <p>
    {celsius}
    <sup>&#8451;</sup>
  </p>
);

export default Celsius;
