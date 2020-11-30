import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../../store/modules/weather/weather.types';
import HeadIconWeather from '../molecules/HeadIconWeather';
import Humidity from '../molecules/Humidity';
import Pressure from '../molecules/Pressure';
import Temperatures from '../molecules/Temperatures';
import Wind from '../molecules/Wind';

const CardStyle = styled.div`
  width:35em;
  height:15em;
  background-color: #efefef;
  border-radius:4px;
  margin-top:1em;
  margin-bottom:1em;
  margin-right:auto;
  margin-left:auto;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

interface WeatherProps {
  data:WeatherData
}

const CardWeather:FC<WeatherProps> = ({ data }:WeatherProps) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <CardStyle>
      <HeadIconWeather
        desc={data.weather[0].description}
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
      />
      <Temperatures
        mainTemp={data.main.temp}
        fahrenheit={fahrenheit}
        celsius={celsius}
      />
      <Humidity title={data.main.humidity} />
      <Pressure title={data.main.pressure} />
      <Wind title={data.wind.speed} />
    </CardStyle>
  );
};

export default CardWeather;
