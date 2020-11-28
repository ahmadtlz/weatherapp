import {
  GET_WEATHER, GET_WEATHER_START, WeatherAction, SET_ERROR, WeatherData
} from './weather.types';

export const getWeatherStart = ():WeatherAction => ({
  type: GET_WEATHER_START
});

export const getWeatherSuccess = (resData:WeatherData):WeatherAction => ({
  type: GET_WEATHER,
  payload: resData
});

export const getWeatherFailure = (err:string):WeatherAction => ({
  type: SET_ERROR,
  payload: err
});
