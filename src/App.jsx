//import { useState } from "react";
//import "./App.css";
import "./index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
//import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button1 from "./Button/Button1.jsx";
//import Button2 from "./Button2.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {
  return (
    <>
      <Header />
      {/*<Food /> <hr />*/}
      <Card />
      <Card />
      <Card />
      <Button1 />
      {/* <Button2 />*/}
      <Student name="Ali" age={34} isStudent={true} />
      <UserGreeting IsLoggedIn={true} username="AmirHossein" />
      <UserGreeting IsLoggedIn={false} username="AmirHessam" />
      {/*<Student name="Ali" age="ghi" isStudent={true} />
      <Student />*/}
      {/**/}
      <Footer />
    </>
  );
}

export default App;
