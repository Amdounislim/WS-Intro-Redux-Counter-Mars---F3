import { ADDITION } from "../constants/actionsTypes";

const intialState = {
  sum: 0,
};

const reducerAddition = (state = intialState, action) => {
  if (action.type === ADDITION) {
    // return { ...state, sum: action.payload.val1 + action.payload.val2 };
    return { ...state, sum: action.x + action.y };
  } else {
    return state;
  }
};

export default reducerAddition;
