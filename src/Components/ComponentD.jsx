import "./components.css";
import React, { useContext, useState } from "react";
import { UserContext } from "./ComponentA.jsx";
//function ComponenetD(props) {
function ComponenetD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
export default ComponenetD;
