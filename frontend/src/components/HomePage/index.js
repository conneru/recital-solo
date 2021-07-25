import homepage from "../../images/homepage.png";
import { Route, Switch, Link } from "react-router-dom";
import AllMovies from "../AllMovies";
import MovieByGenre from "../MovieByGenre";
import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [all, setAll] = useState(false);
  const [action, setAction] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [drama, setDrama] = useState(false);
  const [scifi, setScifi] = useState(false);
  const [horror, setHorror] = useState(false);
  const [mystery, setMystery] = useState(false);
  const [romance, setRomance] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [western, setWestern] = useState(false);

  function set() {
    setAll(false);
    setAction(false);
    setComedy(false);
    setDrama(false);
    setScifi(false);
    setHorror(false);
    setMystery(false);
    setRomance(false);
    setThriller(false);
    setWestern(false);
  }

  return (
    <div className="homeContainer">
      <div className="homePageImage">
        <img src={homepage} alt="homepage" />
      </div>
      <div className="newMovies"></div>
      <button
        onClick={() => {
          set();
          setAll(true);
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          set();
          setAction(true);
        }}
      >
        Action
      </button>
      <button
        onClick={() => {
          set();
          setComedy(true);
        }}
      >
        Comedy
      </button>
      <button
        onClick={() => {
          set();
          setDrama(true);
        }}
      >
        Drama
      </button>
      <button
        onClick={() => {
          set();
          setHorror(true);
        }}
      >
        Horror
      </button>
      <button
        onClick={() => {
          set();
          setMystery(true);
        }}
      >
        Mystery
      </button>
      <button
        onClick={() => {
          set();
          setRomance(true);
        }}
      >
        Romance
      </button>
      <button
        onClick={() => {
          set();
          setScifi(true);
        }}
      >
        Sci-Fi
      </button>
      <button
        onClick={() => {
          set();
          setThriller(true);
        }}
      >
        Thriller
      </button>
      <button
        onClick={() => {
          set();
          setWestern(true);
        }}
      >
        Western
      </button>
      {all ? <AllMovies /> : null}
      {action ? <MovieByGenre genre="Action" title="Action" /> : null}
      {comedy ? <MovieByGenre genre="Comedy" title="Comedy" /> : null}
      {drama ? <MovieByGenre genre="Drama" title="Drama" /> : null}
      {horror ? <MovieByGenre genre="Horror" title="Horror" /> : null}
      {mystery ? <MovieByGenre genre="Mystery" title="Mystery" /> : null}
      {romance ? <MovieByGenre genre="Romance" title="Romance" /> : null}
      {scifi ? <MovieByGenre genre="Sci-Fi" title="Sci-Fi" /> : null}
      {thriller ? <MovieByGenre genre="Thriller" title="Thriller" /> : null}
      {western ? <MovieByGenre genre="Western" title="Western" /> : null}
    </div>
  );
}

export default HomePage;
