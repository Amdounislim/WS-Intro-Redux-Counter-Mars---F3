import { ADDITION } from "../constants/actionsTypes";

// export const addition = (payload) => {
//   return {
//     type: ADDITION,
//     payload,
//   };
// };

export const addition = (x, y) => {
  return {
    type: ADDITION,
    x,
    y,
  };
};
