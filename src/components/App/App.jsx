import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/MoviesPage">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
