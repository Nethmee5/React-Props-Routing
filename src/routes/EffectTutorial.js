import React, {useState, useEffect } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");

  useEffect(() => {
    //call when page renders
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was CALLED")
      });
  },[]);
  return <div>Hello world {data}</div>;
}

export default EffectTutorial;
