import {fromJS} from 'immutable'; //把js对象转化为immutable对象
import * as constants from './constants';

const defaultState = fromJS ({
  title: '',
  content: '',
});

const changeDetail = (state, action) => {
  return state.merge ({
    title: action.title,
    content: action.content,
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return changeDetail (state, action);
    default:
      return state;
  }
};
