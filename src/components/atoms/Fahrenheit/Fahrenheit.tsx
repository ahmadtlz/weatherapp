import React, { FC } from 'react';

interface Props {
  fahrenheit:string;
}

const Fahrenheit:FC<Props> = ({ fahrenheit }:Props) => (
  <p>
    {fahrenheit}
    <sup>&#8457;</sup>
  </p>
);

export default Fahrenheit;
