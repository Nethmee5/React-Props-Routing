import React, {useContext} from 'react'
import AppContext from "./routes/ContextTutorial";

function Child2() {

    const {username} = useContext(AppContext);

  return (
    <div>
      {/* <h1>User: {username}</h1> */}
      Child2
    </div>
  );
}

export default Child2;