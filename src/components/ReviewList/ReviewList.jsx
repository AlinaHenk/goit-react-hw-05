export default function ReviewList({ reviews }) {
  return reviews.results.map((review) => (
    <div key={review.id}>
      <ul>
        <li>
          <h4>{review.author}</h4>
        </li>
        <p>{review.content}</p>
      </ul>
    </div>
  ));
}
