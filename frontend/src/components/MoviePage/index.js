import { fetchMovies, fetchOneMovie, deleteMovie } from "../../store/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MoviePage.css";
import AudioPlayer from "../AudioPlayer";
import { getAllQuotes } from "../../store/quote";

function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneMovie(id));
    dispatch(getAllQuotes(id));
  }, [dispatch]);

  const history = useHistory();

  // const movies = useSelector((state) => state.movieState.movies);
  // const movie = movies.find((movie) => movie.id === Number(id));
  const user = useSelector((state) => state.session.user);
  const movie = useSelector((state) => state.movieState.curMovie);

  return (
    <div className="moviePageContainer">
      <div className="movieContainer">
        <img id="headerImg" src={movie.imageUrl} alt={movie.title} />
        <img id="cover" src={movie.imageUrl} alt={movie.title} />
        <div id="movieInfo">
          <h1 id="title">
            {movie.title} <span> ({movie.releaseDate}) </span>
          </h1>
          {movie.director ? <p>Dir. {movie.director}</p> : null}
          {movie.description ? <p>{movie.description}</p> : null}
          {movie.length ? <p>{movie.length} Minutes</p> : null}
        </div>
        <AudioPlayer />
        {user ? (
          movie.userId === user.id ? (
            <button
              onClick={() => history.push(`/movie/edit/${movie.id}`)}
              className="editBut"
            >
              Edit
            </button>
          ) : null
        ) : null}
        {user ? (
          movie.userId === user.id ? (
            <button
              onClick={() =>
                dispatch(deleteMovie(movie.id)).then(history.push("/"))
              }
              className="deleteBut"
            >
              Delete
            </button>
          ) : null
        ) : null}
      </div>
    </div>
  );
}

export default MoviePage;
