import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
      <p>Lesson1</p>
      <Link to="/food">lesson1 part1</Link>
      <br />
      <Link to="/card">lesson1 part2</Link>
      <hr />
      <p>Lesson2</p>
      <Link to="/button1">lesson2</Link>
      <hr />
      <p>Lesson3</p>
      <Link to="/student">lesson3</Link>
      <hr />
      <p>Lesson4</p>
      <Link to="/usergreeting">lesson4</Link>
      <hr />
      <p>Lesson5</p>
      <Link to="/list">lesson5</Link>
      <hr />
      <p>Lesson6</p>
      <Link to="/button2">lesson6 part1</Link>
      <Link to="/button2">lesson6 part2</Link>
      <hr />
      <p>Lesson7</p>
      <Link to="/mycomponent">lesson7</Link>
      <hr />
      <p>Lesson8</p>
      <Link to="/mycomponent">lesson8</Link>
      <hr />
      <p>Lesson9</p>
      <Link to="mycomponents">lesson9</Link>
      <hr />
      <p>Lesson10</p>
      <Link to="mycomponentobject">lesson10</Link>
      <hr />
      <p>Lesson11</p>
      <Link to="mycomponentarray">lesson11</Link>
      <hr />
      <p>Lesson12</p>
      <Link to="#">lesson12</Link>
      <hr />
      <p>Lesson13</p>
      <Link to="#">lesson13</Link>
      <hr />
      <p>Lesson14</p>
      <Link to="#">lesson14</Link>
      <hr />
      <p>Lesson15</p>
      <Link to="#">lesson15</Link>
      <hr />
      <Footer />
    </>
  );
}
export default Home;
