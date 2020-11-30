import React, { FC } from 'react';
import styled from 'styled-components';
import Celsius from '../atoms/Celsius/Celsius';
import Fahrenheit from '../atoms/Fahrenheit/Fahrenheit';
import Heading from '../atoms/Heading/Heading';
import MainTemp from '../atoms/MainTemp/MainTemp';

const TemperaturesStyle = styled.div`
  align-items: center;
  flex-direction:column;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  .title {
    font-size:1.3rem;
  }
`;
interface Props {
  fahrenheit:string;
  celsius:string;
  mainTemp:number;

}
const Temperatures:FC<Props> = ({ fahrenheit, celsius, mainTemp }:Props) => (
  <TemperaturesStyle>
    <Heading desc="temp" />
    <div className="title">
      <MainTemp mainTemp={mainTemp} />
      <Fahrenheit fahrenheit={fahrenheit} />
      <Celsius celsius={celsius} />
    </div>
  </TemperaturesStyle>
);

export default Temperatures;
