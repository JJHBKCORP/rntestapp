import * as actions from './actiontypes';

export const Increment = a => {
  return {
    type: actions.INCREMENT,
    payload: {
      counter: a,
    },
  };
};

export const Decrement = a => {
  return {
    type: actions.DECREMENT,
    payload: {
      counter: a,
    },
  };
};

export const Reset = a => {
  return {
    type: actions.RESET,
    payload: {
      counter: a,
    },
  };
};
