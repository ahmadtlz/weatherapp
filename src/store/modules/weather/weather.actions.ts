import {
  GET_WEATHER_START, WeatherAction, GET_WEATHER_FAILURE, WeatherData, GET_WEATHER_SUCCESS
} from './weather.types';

export const getWeatherStart = (city:string):WeatherAction => ({
  type: GET_WEATHER_START,
  payload: city
});

export const getWeatherSuccess = (resData:WeatherData):WeatherAction => ({
  type: GET_WEATHER_SUCCESS,
  payload: resData
});

export const getWeatherFailure = (err:string):WeatherAction => ({
  type: GET_WEATHER_FAILURE,
  payload: err
});
