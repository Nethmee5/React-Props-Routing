import React, { useReducer } from "react";

const ReducerTutorial = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
          text: state.text,
        };
      case "showText":
        return {
          count: state.count,
          text: !state.text,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, text: true });

  return (
    <div>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          //setCount(count + 1);
          // setText(!text);
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "showText"})
        }}
      >
        Click Here
      </button>
      {state.text && <h3>text</h3>}
    </div>
  );
};

export default ReducerTutorial;
