import React, { FC } from 'react';
import IconWeatherStyle from './IconWeather.styled';

interface Props {
  src:string
}
const IconWeather:FC<Props> = ({ src }:Props) => (
  <IconWeatherStyle>
    <img src={src} alt="Weather-Icon" />
  </IconWeatherStyle>
);

export default IconWeather;
