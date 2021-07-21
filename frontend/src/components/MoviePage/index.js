import { fetchMovies, fetchOneMovie } from "../../store/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./MoviePage.css";
import ReactPlayer from "react-player";
import AudioPlayer from "../AudioPlayer";

function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [dispatch]);

  const movie = useSelector((state) => state.movieState.movies[0]);

  return (
    <div className="movieContainer">
      <img id="headerImg" src={movie.imageUrl} alt={movie.title} />
      <h1>
        {movie.title} <span>({movie.releaseDate})</span>
      </h1>
      <p>Dir. {movie.director}</p>
      <p>{movie.description}</p>
      <img src={movie.imageUrl} alt={movie.title} />
      <AudioPlayer quotes={movie.Quotes} />
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
    </div>
  );
}

export default MoviePage;
