import * as constants from './constants';
import {fromJS} from 'immutable'; //把js对象转化为immutable对象

const defaultState = fromJS ({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set ('login', action.value);
    case constants.LOGIN_OUT:
      return state.set ('login', action.value);
    default:
      return state;
  }
};
