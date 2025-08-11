import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../tmdApi";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMovieCast(movieId)
      .then((data) => setCast(data.cast || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (!cast.length) return <p>No cast info available.</p>;

  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          <img
            className={css.img}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "/no-image.png"
            }
            alt={actor.name}
            width={200}
            height={300}
          />
          <p>
            {actor.name} as {actor.character}
          </p>
        </li>
      ))}
    </ul>
  );
}