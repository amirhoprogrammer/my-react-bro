import "./components.css";
import ComponenetC from "./ComponentC.jsx";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";
//function ComponenetB(props) {
function ComponenetB() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>{`Hello again ${user}`}</h2>
      {/*<ComponenetC user={props.user} />*/}
      <ComponenetC />
    </div>
  );
}
export default ComponenetB;
