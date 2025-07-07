import React, { useState } from "react";
function MyComponent() {
  //let [name, setName] = useState();
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("SpongeBob");
    /*name = "SpongeBob";
    console.log(name);*/
  };
  const updateAge = () => {
    setAge(24);
  };
  const toggleEmployeStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name:</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>increment Age:</button>
      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployeStatus}>Toggle Status:</button>
    </div>
  );
}
export default MyComponent;
