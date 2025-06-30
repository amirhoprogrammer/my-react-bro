import React, { useState, useEffect } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener remove");
    };
  }, []);

  /*
  useEffect(() => {
    document.title = `count: ${count}`;
  }, []);*/
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);
  /*useEffect(() => {
    document.title = `color: ${color}`;
  });*/
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>subtract</button>
      <button onClick={changeColor}>Change Color</button>
      <p>Window Width : {width}px</p>
      <p>Window Height : {height}px</p>
    </>
  );
}
export default UseEffect;
