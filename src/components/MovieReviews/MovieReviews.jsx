import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../movies-api";
import ReviewList from "../ReviewList/ReviewList";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);
  const noReviews = <p>We don't have any reviews for this movie.</p>;
  return !reviews ? (
    ""
  ) : reviews.total_results > 0 ? (
    <ReviewList reviews={reviews} />
  ) : (
    noReviews
  );
}
