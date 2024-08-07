import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
}
