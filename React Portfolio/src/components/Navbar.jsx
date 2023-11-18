import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <Link to="/">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/resume">RESUME</Link>
    </nav>
  );
}


