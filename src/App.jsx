//import { useState } from "react";
//import "./App.css";
import "./index.css";
import Food from "./Food.jsx";
import Button1 from "./Button/Button1.jsx";
import Button2 from "./Button2.jsx";
import Students from "./Students/Students.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyComponents from "./MyComponents.jsx";
import MyComponentObject from "./MyComponentObject.jsx";
import MyComponentArray from "./MyComponentArray.jsx";
import MyComponentArrayObject from "./MyComponentArrayObject.jsx";
import UseEffect from "./UseEffect.jsx";
import ToDoList from "./ToDoList.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import Cards from "./Cards/Cards.jsx";
import UserGreetings from "./UserGreeting/UserGreetings.jsx";
import Lists from "./Lists/Lists.jsx";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import DigitalClock from "./DigitalClock.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/button1" element={<Button1 />} />
      <Route path="/students" element={<Students />} />
      <Route path="/usergreetings" element={<UserGreetings />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/button2" element={<Button2 />} />
      <Route path="/profilepicker" element={<ProfilePicture />} />
      <Route path="/mycomponent" element={<MyComponent />} />
      <Route path="/mycomponents" element={<MyComponents />} />
      <Route path="/mycomponentobject" element={<MyComponentObject />} />
      <Route path="/mycomponentarray" element={<MyComponentArray />} />
      <Route path="/mycomponentarrayobject" element={<MyComponentArrayObject />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todolist" element={<ToDoList />} />
      <Route path="/colorpicker" element={<ColorPicker />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/project1" element={<DigitalClock />} />
    </Routes>
  );
}

export default App;
