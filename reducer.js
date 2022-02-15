import * as actions from './actiontypes';
const state1 = {
  counter: 0,
};
export const reducer = (state = state1, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {...state, counter: action.payload.counter};
    case actions.DECREMENT:
      return {...state, counter: action.payload.counter};
    case actions.RESET:
      return {...state, counter: action.payload.counter};
    default:
      return state;
  }
};
