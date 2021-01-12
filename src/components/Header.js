function Header({ title }) {
  return (
    <header
      className="fixed-top w-100 bg-primary shadow-sm d-flex align-items-center justify-content-center"
      style={{ height: "55px" }}
    >
      <h2>{title}</h2>
    </header>
  );
}

export default Header;
