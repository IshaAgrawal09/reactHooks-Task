import React, { useState } from "react";

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="task2">
      <div id="counter">{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Task2;
