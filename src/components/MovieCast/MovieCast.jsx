import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../movies-api";
import ActorList from "../ActorList/ActorList";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCast(movieId);
        setCast(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);
  const noCast = (
    <p>We don't have any information about the cast for this movie.</p>
  );
  return !cast ? "" : cast.cast.length > 0 ? <ActorList cast={cast} /> : noCast;
}
