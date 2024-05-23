import React, { useState, useCallback } from "react";
import Child from "../Child";

export default function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("click this");
  
  //we want to say that we only want to recreate thi below function whenever thes a change in data
  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      ></button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}
