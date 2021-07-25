import { fetchMovies, fetchOneMovie, fetchByGenre } from "../../store/movie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MovieByGenre({ genre, title }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByGenre(genre));
    dispatch(fetchOneMovie(-1));
  }, [dispatch]);

  const movies = useSelector((state) => state.movieState.movies);
  return (
    <div>
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
