import { element } from "prop-types";
import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Drive to work"]);
  const [newTasks, setNewTasks] = useState("");
  function handInputchange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    //delete whitespace
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder="Enter a task" value={newTasks} onChange={handInputchange} />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-up-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-down-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
