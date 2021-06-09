import { DECREMENT, INCREMENT, RESET } from "../constants/actionsTypes";

const intialState = {
  count: 0,
};

const reducerCounter = (state = intialState, action) => {
  //   if (action.type === "INCREMENT") {
  //     return { ...state, count: state.count + 1 };
  //   }
  //   else return state
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
};

export default reducerCounter;
