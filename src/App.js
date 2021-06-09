import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "./JS/Actions/actionShow";
import { addition } from "./JS/Actions/actionAddition";

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducerShow.show);
  const sum = useSelector((state) => state.reducerAddition.sum);
  const name = useSelector((state) => state.reducerShow.name);
  return (
    <div className="App">
      <h1>React Redux -- Workshop</h1>
      {/* <button onClick={() => dispatch(toggle())}>
        {show ? "Hid Counter" : "Show Counter"}
      </button> */}
      {/* {show && <Counter />} */}
      <input type="text" onChange={(e) => setVal1(e.target.value)} />
      <input type="text" onChange={(e) => setVal2(e.target.value)} />
      <button
        onClick={() =>
          // dispatch(addition({ val1: Number(val1), val2: Number(val2) }))
          dispatch(addition(Number(val1), Number(val2)))
        }
      >
        +
      </button>
      <p>{`sum : ${sum}`}</p>
      <p>{`hello : ${name}`}</p>
    </div>
  );
}

export default App;
