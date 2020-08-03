import React from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Login from "./components/Login";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learning Redux</h1>
      <h2>counter {counter}</h2>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <Login/>
    </div>
  );
}

export default App;
