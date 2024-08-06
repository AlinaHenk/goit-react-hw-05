export default function MovieInfo({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>

      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <img src={movie.poster_path}></img>
      <h2>Overwiew</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <p>{movie.genres.map((item) => item.name)} </p>
    </div>
  );
}
