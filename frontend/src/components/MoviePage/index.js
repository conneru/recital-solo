import { fetchMovies, fetchOneMovie, deleteMovie } from "../../store/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MoviePage.css";
import ReactPlayer from "react-player";
import AudioPlayer from "../AudioPlayer";

function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, []);

  const history = useHistory();

  // const movies = useSelector((state) => state.movieState.movies);
  // const movie = movies.find((movie) => movie.id === Number(id));
  const user = useSelector((state) => state.session.user);
  const movie = useSelector((state) => state.movieState.curMovie);

  return (
    <div className="movieContainer">
      {user ? (
        movie.userId === user.id ? (
          <button
            onClick={() =>
              dispatch(deleteMovie(movie.id)).then(history.push("/movies"))
            }
          >
            delete
          </button>
        ) : null
      ) : null}
      {user ? (
        movie.userId === user.id ? (
          <button onClick={() => history.push(`/movie/edit/${movie.id}`)}>
            edit
          </button>
        ) : null
      ) : null}
      <img id="headerImg" src={movie.imageUrl} alt={movie.title} />
      <img id="cover" src={movie.imageUrl} alt={movie.title} />
      <div id="movieInfo">
        <h1>
          {movie.title} <span>({movie.releaseDate})</span>
        </h1>
        <p>Dir. {movie.director}</p>
        <p>{movie.description}</p>
      </div>
      <AudioPlayer />
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
    </div>
  );
}

export default MoviePage;
