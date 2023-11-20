
export default function Navbar({ links }) {
  return (
    <nav className="text-end col-12 col-xl-6">
      {links.map((link) => link)}
    </nav>
  );
}
