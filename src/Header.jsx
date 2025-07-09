import "./csses/header_footer.css";
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://github.com/amirhoprogrammer">About</a>
          </li>
          <li>
            <a href="/project1">Project1</a>
          </li>
          <li>
            <a href="#">Project2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
