import { INCREMENT, DECREMENT } from "../actions/actions";

const intialState = {
  counter: 0
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    default:
  }
  return state;
};

export default reducer;
