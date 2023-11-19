import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="d-flex border justify-content-between align-items-end">
      <h1 className="mb-0">MICHAEL MARSOLO</h1>
      <Navbar
        links={[
          <Link to="/">ABOUT</Link>,
          <Link to="/work">WORK</Link>,
          <Link to="/contact">CONTACT</Link>,
          <Link to="/resume">RESUME</Link>,
        ]}
      />
    </header>
  );
}
