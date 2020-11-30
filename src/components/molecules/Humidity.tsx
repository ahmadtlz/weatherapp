import React, { FC } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Title from '../atoms/Title/Title';

const HumidityStyle = styled.div`
  align-items: center;
  flex-direction:column;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

`;
interface HumidityProps {
  title:number;
}
const Humidity:FC<HumidityProps> = ({ title }:HumidityProps) => (
  <HumidityStyle>
    <Heading desc="Humidity" />
    <Title title={title} />
  </HumidityStyle>
);

export default Humidity;
