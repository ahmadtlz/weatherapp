import {
  takeLatest, call, put, all, PutEffect, CallEffect, ForkEffect, AllEffect
} from 'redux-saga/effects';

import {
  getWeatherSuccess,
  getWeatherFailure
} from './weather.actions';
import {
  GET_WEATHER_START,
  WeatherAction, WeatherData, WeatherError
} from './weather.types';

export function* getWeatherAsync(city:WeatherAction): Generator<
 CallEffect<Response> | PutEffect<WeatherAction>, void, any> {
  try {
    const res = yield call(fetch,
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

    if (!res.ok) {
      const resData: WeatherError = res.json();
      throw new Error(resData.message);
    }

    const resData: WeatherData = res.json();
    yield put(getWeatherSuccess(resData));
  } catch (error) {
    yield put(getWeatherFailure(error.message));
  }
}

export function* getWeatherStart():Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GET_WEATHER_START, getWeatherAsync);
}

export function* weatherSaga(): Generator<AllEffect<CallEffect<void>>, void, unknown> {
  yield (all([call(getWeatherStart)]));
}
