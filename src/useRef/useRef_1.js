import React, { useState, useRef } from "react";

function UseRef_1() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseCountRef = () => {
    countRef.current += 1;
    console.log("Ref: ", countRef.current);
  };

  const increaseCountVar = () => {
    countVar += 1;
    console.log("Var: ", countVar);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <button onClick={increaseCountVar}>Var 올려</button>
    </div>
  );
}

export default UseRef_1;
