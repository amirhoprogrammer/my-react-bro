//import { useState } from "react";
//import "./App.css";
import "./index.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button1 from "./Button/Button1.jsx";
import Button2 from "./Button2.jsx";
function App() {
  return (
    <>
      <Header />
      <Food />
      <hr />
      <Card />
      <Card />
      <Card />
      <Button1 />
      <Button2 />
      {/**/}
      <Footer />
    </>
  );
}

export default App;
