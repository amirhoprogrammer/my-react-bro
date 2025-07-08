import React, { useState } from "react";
import "./index.css";
function MyComponentObject() {
  const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });
  function handleYearchange(event) {
    //setCar({ ...car, year: 2025 });
    //setCar({ ...car, year: event.target.value });
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakechange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelchange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div className="mycomponentobject">
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearchange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakechange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelchange} />
    </div>
  );
}
export default MyComponentObject;
