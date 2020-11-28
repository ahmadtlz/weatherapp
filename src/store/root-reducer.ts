import { combineReducers } from 'redux';
import alertReducer from './modules/alert/alert.reducer';
import weatherReducer from './modules/weather/weather.reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer
});

export type RootState=ReturnType<typeof rootReducer>;
export default rootReducer;
