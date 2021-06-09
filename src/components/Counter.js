import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../JS/Actions/actionCounter";

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>

      <span>{props.count}</span>
      <br />
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.reducerCounter.count,
  };
};

// const mapDistachToProps=(dispatch)=>{
//     return {
//         increment:()=>dispatch(increment())
//     }
// }
// const mapDistachToProps = {
//   increment,
//   decrement,
// };

// export default connect(mapStateToProps, mapDistachToProps)(Counter);

export default connect(mapStateToProps, { increment, decrement, reset })(
  Counter
);
