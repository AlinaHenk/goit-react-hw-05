import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <Link to="/">To home page</Link>
      <h1>Not found page</h1>
    </div>
  );
}
