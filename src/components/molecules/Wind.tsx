import React, { FC } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Title from '../atoms/Title/Title';

const WindStyle = styled.div`
  align-items: center;
  flex-direction:column;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;

`;
interface WindProps {
  title:number;
}
const Wind:FC<WindProps> = ({ title }:WindProps) => (
  <WindStyle>
    <Heading desc="Wind" />
    <Title title={title} />
  </WindStyle>
);

export default Wind;
