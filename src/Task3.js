import React, { useState, useEffect } from "react";

const Task3 = () => {
  const date = new Date();
  const [hr, sethr] = useState(date.getHours());
  const [min, setMin] = useState(date.getMinutes());
  const [sec, setSec] = useState(date.getSeconds());

  let timerId;
  const decrement = () => {
      if(sec>0){
        setSec(sec - 1);
      }else{
        setSec(59)
        if(min > 0){
            setMin(min - 1)
        }
        else{
            setMin(59)
            sethr(hr - 1)
        }
      }
    
  };
  useEffect(() => {
    setTimeout(decrement, 1000);

    return () => {
      clearTimeout(decrement);
    };
  });

  return (
    <div className="task3">
     <div className="time"> {hr<10?"0" + hr:hr}:{min<10?"0" + min:min}:{sec<10?"0" + sec:sec}</div>
      <button onClick={decrement}></button>
    </div>
  );
};

export default Task3;
