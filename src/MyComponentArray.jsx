import { element } from "prop-types";
import React, { useState } from "react";
import "./index.css"
function MyComponentArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    //setFoods([newFood]);
    setFoods((f) => [...f, newFood]);
    //setFoods(f =>[...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div className="mycomponentarray">
      <h2>List of Food(add)</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button value={foods} onClick={handleAddFood}>
        Add Food
      </button>
      {/*<h2>List of Food(remove)</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}></li>
        ))}
      </ul>
        <input type="text" value={foods} onChange={handleRemoveFood} />*/}
    </div>
  );
}
export default MyComponentArray;
