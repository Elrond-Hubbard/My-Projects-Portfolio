export default function projectNavbar({ links }) {
  return (
    <div className="d-flex justify-content-end col-12 col-xl-6">
      <nav >
        {links.map((link) => link)}
      </nav>
    </div>
  );
}
