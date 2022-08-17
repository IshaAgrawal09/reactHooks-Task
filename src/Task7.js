import React, { useState, useMemo, useCallback } from "react";

const Task7 = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [color, setColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  //   USEMEMO FUNCTION
  //   const val1 = useMemo(() => {
  //     if (val !== "") {
  //       return parseInt(val) + 1;
  //     }
  //   }, []);
  //   const val2 = useMemo(() => {
  //     if (val !== "") {
  //       return parseInt(val) + 2;
  //     }
  //   }, []);

  //   CALLBACK FUNCTION
  const handle = useCallback(() => {
    let show = document.getElementById("num").value;
    if (show !== "") {
      setVal1(parseInt(show) + 1);
      setVal2(parseInt(show) + 2);
    }
  }, []);

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
        onChange={handle}
        // value={val}
        // onChange={(event) => setVal(event.target.value)}
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
