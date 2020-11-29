import { SET_ALERT, AlertAction } from './alert.types';

export const setAlert = (message:string):AlertAction => ({
  type: SET_ALERT,
  payload: message
});
