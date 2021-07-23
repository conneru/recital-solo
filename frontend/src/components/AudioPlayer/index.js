import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteQuote } from "../../store/quote";
import { fetchMovies, fetchOneMovie } from "../../store/movie";

function AudioPlayer() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [dispatch]);

  function handleClick(e) {
    const [title, url] = e.target.value.split(",");
    setUrl(url);
    // console.log(e.target.value[0]);
    setTitle(title);
  }
  const movie = useSelector((state) => state.movieState.curMovie);
  const user = useSelector((state) => state.session.user);
  const quotes = useSelector((state) => state.movieState.quotes);

  return (
    <div id="audioPlayer">
      <h3 id="quotesName">
        Quotes from <span>{movie.title} </span>
      </h3>
      <audio controls autoPlay src={url} type="audio/mpeg" />
      {quotes.map((quote) => (
        <div>
          <button
            onClick={handleClick}
            value={[quote.title, quote.url]}
            key={quote.title}
            class="playButton"
          >
            ▶
          </button>
          <h3 id="quoteTitle">{quote.title}</h3>
          {user ? (
            user.id === quote.userId ? (
              <button onClick={() => dispatch(deleteQuote(quote.id))}>
                Delete
              </button>
            ) : null
          ) : null}
        </div>
      ))}
      {user && (
        <div id="createQuote">
          <Link to="/quote/create">Add a new quote!</Link>
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
