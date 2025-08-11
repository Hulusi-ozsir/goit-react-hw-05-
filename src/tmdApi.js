import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWFhM2I1ZDBlMjk2NGMzZmNhMjFlNGNlYzRjMTQ0NSIsIm5iZiI6MTc0OTk5ODM5MS43NDEsInN1YiI6IjY4NGVkYjM3MDBlYmI2Y2E3ZjFiZjNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I88LaleX844d4jdnIIYUs1ZOoZ3J_zWhY9Mdv50on0w";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};
export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return response.data.results;
};
export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return response.data;
};
export const fetchMovieCast = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return response.data;
};

export const getImageUrl = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;