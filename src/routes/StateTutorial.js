import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("Nethmee");

  const increment = () => {
    setCounter(counter + 1);
  };
  const print = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
      <input placeholder="enter something..." onChange={print} />
      {value}
    </div>
  );
};

export default StateTutorial;
