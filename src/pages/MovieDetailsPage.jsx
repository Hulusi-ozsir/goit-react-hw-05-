import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails, getImageUrl } from "../tmdApi";
import { NavLink } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || "/movies");
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);
  if (!movie) return <p>Loading movie details...</p>;
  return (
    <div className={css.container}>
      <Link to={backLink.current} className={css.backLink}>
        Go Back
      </Link>
      <div className={css.details}>
        <img
          src={getImageUrl(movie.poster_path) || "/no-image.png"}
          alt={movie.title}
          className={css.poster}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((g) => g.name).join(",")}</p>
        </div>
      </div>
      <hr />
      <div className={css.additional}>
        <p>Additional information:</p>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`} className={css.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`} className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}