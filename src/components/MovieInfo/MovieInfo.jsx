import css from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
  return (
    <div className={css.container}>
      <img src={movie.poster_path} className={css.img}></img>

      <div>
        <h2>{movie.title}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

        <h3>Overwiew</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((item) => item.name + " ")} </p>
      </div>
    </div>
  );
}
