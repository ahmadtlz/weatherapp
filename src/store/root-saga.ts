import {
  all, AllEffect, call, CallEffect
} from 'redux-saga/effects';
import { weatherSaga } from './modules/weather/weather.sagas';

export default function* rootSaga(): Generator<
AllEffect<CallEffect<void>>, void, unknown> {
  yield all([call(weatherSaga)]);
}
