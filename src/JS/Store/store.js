// import { createStore } from "redux";
// import reducerCounter from "../Reducers/reducerCounter";

// const store = createStore(
//   reducerCounter,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;

import { createStore } from "redux";
import rootReducer from "../Reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
