// const db = require("../../../../backend/db/models");
// const { Movie } = db;
// import db from "../../../../backend/db";
import { fetchMovies } from "../../store/movie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

function Home() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movieState.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Recital</h1>
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

export default Home;
