import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import "./csses/home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="lesson1">
        <p>Lesson0: basic list</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/food">
          lesson0
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson1: Card component</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/cards">
          lesson1
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson2: button component</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/button1">
          lesson2
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson3: props</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/students">
          lesson3
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson4: conditional renedering</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/usergreetings">
          lesson4
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson5: rendering list</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/lists">
          lesson5
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson6: click event</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/button2">
          lesson6 part1
        </Link>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/profilepicker">
          lesson6 part2
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson7: Use State Hook(part1)</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponent">
          lesson7
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson8: Use State Hook(part2)</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/counter">
          lesson8
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson8: onchange event handler</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/onchange">
          lesson8
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson9: color picker</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/colorpicker">
          lesson9
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson10: updater function</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponents">
          lesson10
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson11: update object in state</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponentobject">
          lesson11
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson12: update array in state</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/mycomponentarray">
          lesson12
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson13: update array of object in state</p>
        <Link
          style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }}
          to="/mycomponentarrayobject"
        >
          lesson13
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson14: To-do-listapp()</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/todolist">
          lesson14
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson15: Use Effect()</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/useeffect">
          lesson15
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson16: Use context()</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/component1">
          lesson16
        </Link>
      </div>
      <div className="lesson1">
        <p>Lesson17: Use Ref()</p>
        <Link style={{ textDecoration: "none", color: "rgb(3, 193, 120)" }} to="/useref">
          lesson17
        </Link>
      </div>
      <Footer />
    </>
  );
}
export default Home;
