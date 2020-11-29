import {
  WeatherState, WeatherAction, GET_WEATHER_FAILURE, GET_WEATHER_SUCCESS, GET_WEATHER_START
} from './weather.types';

const INITIAL_STATE : WeatherState = {
  data: null,
  loading: false,
  city: '',
  error: ''
};

const weatherReducer = (state = INITIAL_STATE, action:WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_START:
      return {
        ...state,
        loading: true,
        city: action.payload
      };
    case GET_WEATHER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        city: '',
        error: ''
      };
    case GET_WEATHER_FAILURE:
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
