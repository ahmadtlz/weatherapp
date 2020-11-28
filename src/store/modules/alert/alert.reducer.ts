import { AlertState, AlertAction, SET_ALERT } from './alert.types';

const INITIAL_STATE:AlertState = {
  message: ''
};

const alertReducer = (state = INITIAL_STATE, action:AlertAction):AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        message: action.payload
      };
    default:
      return state;
  }
};

export default alertReducer;
