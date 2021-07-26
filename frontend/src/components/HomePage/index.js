import homepage from "../../images/homepage.png";
import { Route, Switch, Link } from "react-router-dom";
import AllMovies from "../AllMovies";
import MovieByGenre from "../MovieByGenre";
import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [all, setAll] = useState(true);
  const [action, setAction] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [drama, setDrama] = useState(false);
  const [scifi, setScifi] = useState(false);
  const [horror, setHorror] = useState(false);
  const [mystery, setMystery] = useState(false);
  const [romance, setRomance] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [western, setWestern] = useState(false);

  const [color, setColor] = useState("#6fdcf7");

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
        <img src={homepage} alt="homepage" id="recitalImg" />
      </div>
      <div className="genres" style={{ backgroundColor: color }}>
        <button
          onClick={() => {
            set();
            setAll(true);
            setColor("#6fdcf7");
          }}
          style={{ backgroundColor: "#6fdcf7" }}
        >
          All
        </button>
        <button
          onClick={() => {
            set();
            setAction(true);
            setColor("#ff9757");
          }}
          style={{ backgroundColor: "#ff9757" }}
        >
          Action
        </button>
        <button
          onClick={() => {
            set();
            setComedy(true);
            setColor("#98ff96");
          }}
          style={{ backgroundColor: "#98ff96" }}
        >
          Comedy
        </button>
        <button
          onClick={() => {
            set();
            setDrama(true);
            setColor("#db5e56");
          }}
          style={{ backgroundColor: "#db5e56" }}
        >
          Drama
        </button>
        <button
          onClick={() => {
            set();
            setHorror(true);
            setColor("#7e74ed");
          }}
          style={{ backgroundColor: "#7e74ed" }}
        >
          Horror
        </button>
        <button
          onClick={() => {
            set();
            setMystery(true);
            setColor("#d482f5");
          }}
          style={{ backgroundColor: "#d482f5" }}
        >
          Mystery
        </button>
        <button
          onClick={() => {
            set();
            setRomance(true);
            setColor("#f582a4");
          }}
          style={{ backgroundColor: "#f582a4" }}
        >
          Romance
        </button>
        <button
          onClick={() => {
            set();
            setScifi(true);
            setColor("#f5f182");
          }}
          style={{ backgroundColor: "#f5f182" }}
        >
          Sci-Fi
        </button>
        <button
          onClick={() => {
            set();
            setThriller(true);
            setColor("#82f5a3");
          }}
          style={{ backgroundColor: "#82f5a3" }}
        >
          Thriller
        </button>
        <button
          onClick={() => {
            set();
            setWestern(true);
            setColor("#f7bc74");
          }}
          style={{ backgroundColor: "#f7bc74" }}
        >
          Western
        </button>
      </div>
      {all ? <AllMovies /> : null}
      {action ? (
        <MovieByGenre genre="Action" title="Action" color="#ff9757" />
      ) : null}
      {comedy ? (
        <MovieByGenre genre="Comedy" title="Comedy" color="#98ff96" />
      ) : null}
      {drama ? (
        <MovieByGenre genre="Drama" title="Drama" color="#db5e56" />
      ) : null}
      {horror ? (
        <MovieByGenre genre="Horror" title="Horror" color="#7e74ed" />
      ) : null}
      {mystery ? (
        <MovieByGenre genre="Mystery" title="Mystery" color="#d482f5" />
      ) : null}
      {romance ? (
        <MovieByGenre genre="Romance" title="Romance" color="#f582a4" />
      ) : null}
      {scifi ? (
        <MovieByGenre genre="Sci-Fi" title="Sci-Fi" color="#f5f182" />
      ) : null}
      {thriller ? (
        <MovieByGenre genre="Thriller" title="Thriller" color="#82f5a3" />
      ) : null}
      {western ? (
        <MovieByGenre genre="Western" title="Western" color="#f7bc74" />
      ) : null}
    </div>
  );
}

export default HomePage;
