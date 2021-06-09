import { ADDITION, TOGGLE } from "../constants/actionsTypes";

const intialState = {
  show: false,
  name:""
};

const reducerShow = (state = intialState, action) => {
  if (action.type === TOGGLE) {
    return { ...state, show: !state.show };
  } 
  else if(action.type === ADDITION) {
    return { ...state, name: "Adel" };
  } 
  else {
      return state
  }
};

export default reducerShow
