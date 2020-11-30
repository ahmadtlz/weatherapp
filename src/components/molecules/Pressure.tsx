import React, { FC } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Title from '../atoms/Title/Title';

const PressureStyle = styled.div`
  align-items: center;
  flex-direction:column;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

`;
interface PressureProps {
  title:number;
}
const Pressure:FC<PressureProps> = ({ title }:PressureProps) => (
  <PressureStyle>
    <Heading desc="Pressure" />
    <Title title={title} />
  </PressureStyle>
);

export default Pressure;
