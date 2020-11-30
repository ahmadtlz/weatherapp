import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../../store/modules/weather/weather.types';
import Title from '../atoms/Title/Title';
import CardWeather from '../organisms/CardWeather';

const CardWeatherContainerStyle = styled.div`
  height:20em;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#fefefe
`;

interface WeatherProps {
  data:WeatherData
}
const CardWeatherContainer:FC<WeatherProps> = ({ data }:WeatherProps) => (
  <CardWeatherContainerStyle>
    <Title title={`${data.name} - ${data.sys.country} `} />
    <CardWeather data={data} />
  </CardWeatherContainerStyle>
);

export default CardWeatherContainer;
