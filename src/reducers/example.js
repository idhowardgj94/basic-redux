import { ADD_COUNT } from "../actions/actionType";

const initState = {
  counter: 0
};

const exampleReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { counter: payload(state.counter) };
    default:
      return state;
  }
}

export default exampleReducer;