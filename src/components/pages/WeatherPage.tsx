import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardWeatherContainer from '../layouts/CardWeatherContainer';
import SearchWeatherContainer from '../layouts/SearchWeatherContainer';
import { RootState } from '../../store/root-reducer';
import Loading from '../atoms/Loading/Loading';
import Alert from '../organisms/Alert';
import { setAlert } from '../../store/modules/alert/alert.actions';
import { getWeatherFailure } from '../../store/modules/weather/weather.actions';
import AlertContainer from '../layouts/AlertContainer';

const WeatherPage:FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state:RootState) => state.weather.data);
  const loading = useSelector((state:RootState) => state.weather.loading);
  const error = useSelector((state:RootState) => state.weather.error);
  const alertMessage = useSelector((state:RootState) => state.alert.message);

  return (
    <section style={{ width: '100%', height: '100%' }}>
      <SearchWeatherContainer />
      {loading
        ? <Loading />
        : weatherData && <CardWeatherContainer data={weatherData} />}
      {alertMessage && <AlertContainer message={alertMessage} onClose={() => dispatch(setAlert(''))} />}
      {error && <AlertContainer message={error} onClose={() => dispatch(getWeatherFailure())} />}
    </section>
  );
};

export default WeatherPage;
