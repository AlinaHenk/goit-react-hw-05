import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "../../components/movies-api";

export default function MoviesPage() {
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const movie = query.get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function searchMovies() {
      if (!movie || movie === "") {
        return;
      }
      try {
        const data = await getMovies(movie);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    searchMovies();
  }, [movie]);

  return (
    <div>
      <Formik
        initialValues={{ movie: !movie ? "" : movie }}
        onSubmit={(values, actions) => {
          navigate("?query=" + values.movie);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="movie"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MovieList movies={movies} />
    </div>
  );
}
