import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Global from './Global.styled';
import { getWeatherStart } from './store/modules/weather/weather.actions';

const App :React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherStart('tehran'));
  }, [getWeatherStart]);

  return (
    <>
      <Global />

      <h1>wether app</h1>
    </>
  );
};

export default App;
