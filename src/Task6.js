import React, { useState, useMemo } from "react";

const Task6 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const calculation = useMemo(()=>longRunFunc(count),[count]);

  const increment = () => {
    setCount(count + 1);
  };
  const addText = () => {
    setText("Welcome" + count);
  };

  return (
    <div className="task6">
      <p>{count}</p>
      <p>{text}</p>
      <p> {calculation}</p>
      <button onClick={addText}>Text</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
const longRunFunc = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1e6; i++) {
    num += 1;
  }
  console.log(" Stopped...");

  return num;
};
export default Task6;
