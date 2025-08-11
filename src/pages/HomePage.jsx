import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../tmdApi";
import MovieList from "../components/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}