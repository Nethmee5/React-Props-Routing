import React,{useContext} from "react";
import { MyContext } from "./routes/ContextTutorial";

function Child1() {
  // const { setUsername } = useContext(AppContext);
 const getValue = useContext(MyContext);
 console.log(getValue,"fromChild One");
  return (
    <div>
      Child1
      {/* <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      /> */}
    </div>
  );
}

export default Child1;
