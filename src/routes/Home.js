import React, { useState, useRef,useCallback,useMemo } from "react";

const Home = () => {
  const [data, setData] = useState(10);
  const ref1 = useRef(null);

//   const refFun = () => {
//     ref1.current.style.color = 'blue';
//     console.log(ref1);
//   };
const refFun = useCallback(()=>{
   ref1.current.style.color = 'blue';
   console.log(ref1);
},[])

const memoValue = useMemo(()=>{
    return data;

},[data])
  return (
    <div>
      {memoValue}
      {data}
      <button
        onClick={() => {
          setData(20);
        }}
        ref={ref1}
      >
        click me
      </button>
      <button onClick={refFun}>click second</button>
    </div>
  );
};

export default Home;
