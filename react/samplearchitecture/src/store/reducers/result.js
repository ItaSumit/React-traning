import { CLEAR, ADD } from "../actions/actions";

const intialState = {
  data: "Hello World",
  counter: 100
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: action.payload
      };
    case CLEAR:
      return {
        ...state,
        data: ""
      };
    default:
  }
  return state;
};

export default reducer;
