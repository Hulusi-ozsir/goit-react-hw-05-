import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../tmdApi";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovieReviews(movieId)
      .then((data) => {
        console.log("Reviews data:", data);
        setReviews(data || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>
            <strong>{review.author}:</strong> {review.content}
          </p>
        </li>
      ))}
    </ul>
  );
}