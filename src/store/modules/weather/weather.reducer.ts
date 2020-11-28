import {
  WeatherState, WeatherAction, GET_WEATHER, SET_ERROR, GET_WEATHER_START
} from './weather.types';

const INITIAL_STATE : WeatherState = {
  data: null,
  loading: false,
  error: ''
};

const weatherReducer = (state = INITIAL_STATE, action:WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_START:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default weatherReducer;
