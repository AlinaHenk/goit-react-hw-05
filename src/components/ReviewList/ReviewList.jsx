export default function ReviewList({ reviews }) {
  return reviews.results.map((review) => (
    <div key={review.id}>
      <ul>
        <li>{review.author}</li>
        <p>{review.content}</p>
      </ul>
    </div>
  ));
}
