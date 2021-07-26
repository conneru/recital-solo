import { fetchMovies, fetchOneMovie, fetchByGenre } from "../../store/movie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Genre.css";

function MovieByGenre({ genre, title, color }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByGenre(genre));
    dispatch(fetchOneMovie(-1));
  }, [dispatch]);

  const movies = useSelector((state) => state.movieState.movies);
  return (
    <div style={{ backgroundColor: color, width: "100%" }} id="entireContainer">
      <h1>{title}</h1>
      <div id="movieContainer">
        {movies.map((movie) => (
          <div id="movieCard" key={movie.title}>
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.imageUrl} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieByGenre;
