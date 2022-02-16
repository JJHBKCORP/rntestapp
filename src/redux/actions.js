import * as actions from './actiontypes';
export const Login = (userid, accesstoken) => {
  return {
    type: actions.LOGIN,
    payload: {
      userid: userid,
      accesstoken: accesstoken,
    },
  };
};

export const Logout = () => {
  return {
    type: actions.LOGOUT,
    payload: {},
  };
};
