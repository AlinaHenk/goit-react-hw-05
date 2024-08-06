import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../movies-api";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
        console.log(data.total_results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);
  return <div>MovieReviews</div>;
}
