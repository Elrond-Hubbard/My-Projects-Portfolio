import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
        <Link id="navlink" to="/">ABOUT</Link>
        <Link id="navlink" to="/work">WORK</Link>
        <Link id="navlink" to="/contact">CONTACT</Link>
        <Link id="navlink" to="/resume">RESUME</Link>
    </div>
  );
}


