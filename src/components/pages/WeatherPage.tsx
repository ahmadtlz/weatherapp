import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import CardWeatherContainer from '../layouts/CardWeatherContainer';
import SearchWeatherContainer from '../layouts/SearchWeatherContainer';
import { RootState } from '../../store/root-reducer';
import Loading from '../atoms/Loading/Loading';

const WeatherPage:FC = () => {
  const weatherData = useSelector((state:RootState) => state.weather.data);
  const loading = useSelector((state:RootState) => state.weather.loading);

  return (
    <section>
      <SearchWeatherContainer />

      {loading
        ? <Loading />
        : weatherData && <CardWeatherContainer data={weatherData} />}

    </section>
  );
};

export default WeatherPage;
