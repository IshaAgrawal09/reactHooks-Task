import React, { useState, useMemo } from "react";

const Task7 = () => {
  const [val, setVal] = useState("");

  const [color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  const val1 = useMemo(() => {
    if (val !== "") {
      return parseInt(val) + 1;
    }
  });
  const val2 = useMemo(() => {
    if (val !== "") {
      return parseInt(val) + 2;
    }
  });

  //   CHANGE THEME
  const theme = () => {
    if (color === "black") {
      setColor("white");
      setBgColor("black");
    } else {
      setColor("black");
      setBgColor("white");
    }
  };

  return (
    <div className="task7">
      <h6>Task 7</h6>
      <input
        type="number"
        id="num"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      />

      <div style={{ color: color, backgroundColor: bgColor }}>
        <button onClick={theme}>Toggle Theme</button>
        <p>{val1}</p>
        <p>{val2}</p>
      </div>
    </div>
  );
};

export default Task7;
