import React, { useState, createContext } from "react";
import ComponenetB from "./ComponentB.jsx";
import "./components.css";

export const UserContext = createContext();

function ComponenetA() {
  const [user, setUser] = useState("Amir");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      {/*<ComponenetB user={user} /> */}
      <UserContext.Provider value={user}>
        <ComponenetB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export default ComponenetA;
