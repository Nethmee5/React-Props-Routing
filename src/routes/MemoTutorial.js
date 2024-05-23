import React, { useState,useEffect, useMemo } from 'react'
import axios from 'axios';
export default function MemoTutorial() {

    const [data,setData] = useState(null);
    const [toggle,setToggle] = useState(false);


    useEffect=(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].name);
        });
    },[]);
//no need to exefcute below code on every data changes
//only need to re -0render this function to whwnever the edata changes
    const findLongestName = (comments) =>{
        if(!comments) return null;

        let longestName ="";
        for(let i=0;i<comments.length;i++ ){
            let currentName = comments[i].name;
            if(currentName.length = longestName.length){
                longestName = currentName;
            }
        }

        console.log("This was computed");
        return longestName;
    };
//only re-render when the data changes in side of the dependency array
    const getLongestName = useMemo(()=>findLongestName(data),[data])
    
  return (
    <div className='App'>
        <div>{getLongestName}</div> 

        <button onClick={()=>{
            setToggle(!toggle);
        }}     
        >
        </button>
    {toggle && <h1>toggle</h1>}
    </div>
  )
}
