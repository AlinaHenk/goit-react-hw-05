import css from "./ActorList.module.css";
export default function ActorList({ cast }) {
  return cast.cast.map((actor) => (
    <div key={actor.id}>
      <ul>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        ></img>
        <li>{actor.name}</li>
        <p>Character: {actor.character}</p>
      </ul>
    </div>
  ));
}
