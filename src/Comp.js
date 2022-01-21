import React, { useState, useEffect} from "react";
import "./style.css";

export default function Comp() {
  const [count, setCount] =useState (0);
  //v1
  useEffect(() => {
    console.log('render');
  });

  //v2
  useEffect(() =>{
    //you will do ur sideeffect here
    console.log('runs only once after first render');
  }, []);

//v3
useEffect(() =>{
  
  console.log('runs when dependency array state changes');
}, [count]);

//v4
//cleanup func
useEffect(() =>{
  return()=>{
    console.log('will run when comp will unmount');
  }
  
}, []);

return (
  <div>
    <button onClick={() => setCount(count -1)} >-</button>
    {count} 
    <button onClick={() => setCount(count -1)} >+</button>
  </div>
);
}
// import React, { useState, useEffect} from "react";
// import "./style.css";

// export default function Comp(){
//   const [count, setCount] =useState (0);

// //v1
// useEffect(() => {
//   console.log('render');
// });

// }