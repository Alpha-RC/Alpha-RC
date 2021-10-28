import React, { useState } from "react";

const App = () => {
  // const state = useState();
  // console.log(state);

  //Array destructuring
  // const color=["ab","bc","cd"];
  // const [color1,color2,color3]=color;
  //then we can select the color index by names;

  // let count = 1;

  // const state = useState();

  const [count, setCount] = useState(0);

  const IncNum = () => 
  {
    setCount(count + 1);
    // console.log("clicked " + count++);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click me</button>
    </>
  );
};
export default App;