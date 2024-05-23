import React, { useState, createContext } from "react";
import Child1 from "../Child1";
import Child2 from "../Child2";

//collection of states
// export const AppContext = createContext(null);

export const MyContext = React.createContext();

function ContextTutorial() {
 
  return (
    <MyContext.Provider value="data">
      <Child1 />
      <Child2 />
    </MyContext.Provider>
  );
}                                                                 

export default ContextTutorial;
