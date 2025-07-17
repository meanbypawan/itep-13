import { Link } from "react-router-dom";

function Header(){
    console.log("Header executed...");
    return <>
      <nav className="navbar navbar-expand-sm bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/term-and-condition">Term And Condition</Link>
        </li>
      </ul>
    </nav>
    </>
}
export default Header;