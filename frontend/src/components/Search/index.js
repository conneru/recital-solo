import { fetchOneMovie, search } from "../../store/movie";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./AllMovies.css";

function Search() {
  const dispatch = useDispatch();
  const { content } = useParams();

  useEffect(() => {
    dispatch(search(content));
    dispatch(fetchOneMovie(-1));
  }, [dispatch]);

  const movies = useSelector((state) => state.movieState.movies);
  return (
    <div>
      <h1>Search</h1>
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

export default Search;
