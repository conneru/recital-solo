import { fetchMovies, fetchOneMovie, deleteMovie } from "../../store/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import "./MoviePage.css";
import ReactPlayer from "react-player";
import AudioPlayer from "../AudioPlayer";

function MoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [dispatch]);

  const movie = useSelector((state) => state.movieState.movies[0]);
  const user = useSelector((state)=> state.session.user)

  return (
    <div className="movieContainer">
      {movie.userId === user.id ? <button onClick={()=>dispatch(deleteMovie(movie.id)).then(history.push('/movies'))}>delete</button> : null}
      {movie.userId === user.id ? <button onClick={()=>history.push(`/movie/edit/${movie.id}`)}>edit</button> : null}
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
