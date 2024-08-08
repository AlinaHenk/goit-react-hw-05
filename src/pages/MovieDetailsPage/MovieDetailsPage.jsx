import { useEffect, useState, useRef } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../../components/movies-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(
    location.state ?? {
      pathname: "/movies",
      search: location.state?.search,
    }
  );

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieId);
        data.poster_path = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current.pathname + backLinkRef.current.search}>
        Go back
      </Link>
      {movie && <MovieInfo movie={movie} />}
      <h3>Additional information</h3>
      <ul className={css.additionalInnfo}>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
