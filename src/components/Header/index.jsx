import Navbar from "../Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="col-12">
      <div className="d-flex align-items-end row">
        <h1 className="col-12 col-xl-6">{`< marsolo.codes />`}</h1>
        <Navbar 
          links={[
            <Link className="" to="/">
              ABOUT
            </Link>,
            <Link className="" to="/work">
              WORK
            </Link>,
            <Link className="" to="/contact">
              CONTACT
            </Link>,
            <Link className="" to="/resume">
              RESUME
            </Link>,
          ]}
        />
      </div>
    </header>
  );
}
