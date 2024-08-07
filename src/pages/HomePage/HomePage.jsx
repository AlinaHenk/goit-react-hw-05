import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../components/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {}
    }
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
