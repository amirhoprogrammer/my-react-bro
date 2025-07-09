import React, { useState, useEffect, useRef } from "react";
import "./index.css";
function UseRef() {
  //let [number, setNumber] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  //console.log(ref);
  useEffect(() => {
    console.log("Component Rendered");
    console.log(inputRef);
  });
  function handleClick() {
    //setNumber((n) => n + 1);
    ref.current = ref.current + 1;
    console.log(ref.current);
  }
  function handleClickagain() {
    inputRef.current.focus();
    inputRef.current.style.background = "purple";
  }
  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.background = "purple";
    inputRef2.current.style.background = "";
    inputRef3.current.style.background = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "purple";
    inputRef3.current.style.background = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "";
    inputRef3.current.style.background = "purple";
  }
  return (
    <div className="useref">
      <button onClick={handleClick}>click me!</button>
      <button onClick={handleClickagain}>click me again!</button>
      <input type="text" ref={inputRef} />
      <p>interaction</p>
      <div>
        <button onClick={handleClick1}>click me again!</button>
        <input type="text" ref={inputRef1} />
      </div>
      <div>
        <button onClick={handleClick2}>click me again!</button>
        <input type="text" ref={inputRef2} />
      </div>
      <div>
        <button onClick={handleClick3}>click me again!</button>
        <input type="text" ref={inputRef3} />
      </div>
    </div>
  );
}
export default UseRef;
