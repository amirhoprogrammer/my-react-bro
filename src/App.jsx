//import { useState } from "react";
//import "./App.css";
import "./index.css";
//import Header from "./Header.jsx";
//import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button1 from "./Button/Button1.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MyComponents from "./MyComponents.jsx";
import MyComponentObject from "./MyComponentObject.jsx";
import MyComponentArray from "./MyComponentArray.jsx";
import MyComponentArrayObject from "./MyComponentArrayObject.jsx";
import UseEffect from "./UseEffect.jsx";
import ToDoList from "./ToDoList.jsx";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegtables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];
  return (
    <>
      {/*
      <Card />
      <Card />
      <Card />
      <Student name="Ali" age={34} isStudent={true} />
      <UserGreeting IsLoggedIn={true} username="AmirHossein" />
      <UserGreeting IsLoggedIn={false} username="AmirHessam" /> 
      <List items={fruits} category="Fruits" />}
      <List items={vegtables} category="Vegtables" />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {fruits.length > 0 && <List items={vegtables} category="Vegtables" />}
      <Student name="Ali" age="ghi" isStudent={true} />
      <Student />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/card" element={<Card />} />
        <Route path="/button1" element={<Button1 />} />
        <Route path="/student" element={<Student />} />
        <Route path="/usergreeting" element={<UserGreeting />} />
        <Route path="/list" element={<List />} />
        <Route path="/button2" element={<Button2 />} />
        {/*<Route path="/P"*/}
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/mycomponents" element={<MyComponents />} />
        <Route path="/mycomponentobject" element={<MyComponentObject />} />
        <Route path="/mycomponentarray" element={<MyComponentArray />} />
        <Route path="/mycomponentarrayonject" element={<MyComponentArrayObject />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/colorpicker" element={<ColorPicker />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </>
  );
}

export default App;
