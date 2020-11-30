import React, { FC } from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import IconWeather from '../atoms/IconWeather/IconWeather';

const HeadIconWeatherStyle = styled.div`
  align-items: center;
  flex-direction:column;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
`;

interface Props {
  src:string;
  desc:string
}
const HeadIconWeather:FC<Props> = ({ desc, src }:Props) => (
  <HeadIconWeatherStyle>
    <Heading desc={desc} />
    <IconWeather src={src} />
  </HeadIconWeatherStyle>
);

export default HeadIconWeather;
