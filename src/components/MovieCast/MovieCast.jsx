import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../movies-api";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCast(movieId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);
  return <div>MovieCast</div>;
}
