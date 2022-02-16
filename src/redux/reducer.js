import {act} from 'react-test-renderer';
import * as actions from './actiontypes';
const state1 = {
  auth: '',
  userid: '',
};

export const reducer = (state = state1, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        userid: action.payload.userid,
        accesstoken: action.payload.accesstoken,
      };
    case actions.LOGOUT:
      return {
        ...state,
        userid: '12345',
        accesstoken: '',
      };

    default:
      return state;
  }
  //return state;
};
