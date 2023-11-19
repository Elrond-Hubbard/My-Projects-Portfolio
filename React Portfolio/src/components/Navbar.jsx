import { Link } from "react-router-dom";

export default function Navbar({ links }) {
  return (
    <nav className="d-flex mb-1 fs-5">
      {links.map((link) => {
        return <a className="mx-2">{link}</a>;
      })}
    </nav>
  );
}
