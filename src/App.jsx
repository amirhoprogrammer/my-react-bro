//import { useState } from "react";
//import "./App.css";
import "./index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
//import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button1 from "./Button/Button1.jsx";
import Button2 from "./Button2.jsx";
import Student from "./Student.jsx";
//import UserGreeting from "./UserGreeting.jsx";
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
      <Header />
      {/*<Food /> <hr />*/}
      <Card />
      <Card />
      <Card />
      <Button1 />
      <Student name="Ali" age={34} isStudent={true} />
      {/*<UserGreeting IsLoggedIn={true} username="AmirHossein" />
      <UserGreeting IsLoggedIn={false} username="AmirHessam" /> */}
      {/*<List items={fruits} category="Fruits" />*/}
      {/*<List items={vegtables} category="Vegtables" />*/}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {fruits.length > 0 && <List items={vegtables} category="Vegtables" />}
      <Button2 />
      <MyComponent />
      <Counter />
      <ColorPicker />
      <MyComponents />
      <MyComponentObject />
      <MyComponentArray />
      <MyComponentArrayObject />
      <ToDoList />
      <UseEffect />
      {/*<Student name="Ali" age="ghi" isStudent={true} />
      <Student />*/}
      {/**/}
      <Footer />
    </>
  );
}

export default App;
