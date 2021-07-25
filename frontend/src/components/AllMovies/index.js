// const db = require("../../../../backend/db/models");
// const { Movie } = db;
// import db from "../../../../backend/db";
import { fetchMovies, fetchOneMovie } from "../../store/movie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AllMovies.css";

function AllMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchOneMovie(-1));
  }, [dispatch]);

  const movies = useSelector((state) => state.movieState.movies);
  return (
    <div>
      <h1>All</h1>
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

export default AllMovies;
