import { fetchOneMovie, search } from "../../store/movie";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const { content } = useParams();

  useEffect(() => {
    dispatch(search(content));
    dispatch(fetchOneMovie(-1));
  }, [dispatch]);

  const movies = useSelector((state) => state.movieState.movies);
  return (
    <div
      style={{ backgroundColor: "#504e66", height: "100%" }}
      id="entireContainer"
    >
      <h1>Search</h1>
      <div id="movieContainer">
        {!movies.length ? (
          <h1 id="nothing">No Movie or TV show matches this search</h1>
        ) : (
          movies.map((movie) => (
            <div id="movieCard" key={movie.title}>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.imageUrl} alt={movie.title} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
