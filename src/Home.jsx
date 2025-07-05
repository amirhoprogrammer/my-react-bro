import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import "./csses/home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="lesson1">
        <p>Lesson1</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/food">
          lesson1 part1
        </Link>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/card">
          lesson1 part2
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson2</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/button1">
          lesson2
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson3</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/student">
          lesson3
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson4</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/usergreeting">
          lesson4
        </Link>
      </div>
      <p>Lesson5</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/list">
        lesson5
      </Link>
      <hr />
      <p>Lesson6</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/button2">
        lesson6 part1
      </Link>
      <br />
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/profilepicker">
        lesson6 part2
      </Link>
      <hr />
      <p>Lesson7</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponent">
        lesson7
      </Link>
      <hr />
      <p>Lesson8</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/counter">
        lesson8
      </Link>
      <hr />
      <p>Lesson9</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponents">
        lesson9
      </Link>
      <hr />
      <p>Lesson10</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/colorpicker">
        lesson10
      </Link>
      <hr />
      <p>Lesson11</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponentobject">
        lesson11
      </Link>
      <hr />
      <p>Lesson12</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponentarray">
        lesson12
      </Link>
      <hr />
      <p>Lesson13</p>
      <Link
        style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }}
        to="/mycomponentarrayobject"
      >
        lesson13
      </Link>
      <hr />
      <p>Lesson14</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/todolist">
        lesson14
      </Link>
      <hr />
      <p>Lesson15</p>
      <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="#">
        lesson15
      </Link>
      <hr />
      <Footer />
    </>
  );
}
export default Home;
