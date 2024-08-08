import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "../../components/movies-api";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let movie = searchParams.get("query");
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
    <div className={css.form}>
      <Formik
        initialValues={{ movie: !movie ? "" : movie }}
        onSubmit={(values, actions) => {
          setSearchParams({ query: values.movie });
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
