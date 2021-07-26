import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteQuote } from "../../store/quote";
import { fetchMovies, fetchOneMovie } from "../../store/movie";

function AudioPlayer() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [dispatch]);

  function clearPlayer() {
    setTitle("");
    setUrl("");
  }

  function handleClick(e) {
    const [title, url] = e.target.value.split(",");
    setUrl(url);
    // console.log(e.target.value[0]);
    setTitle(title);
  }
  const movie = useSelector((state) => state.movieState.curMovie);
  const user = useSelector((state) => state.session.user);
  const quotes = useSelector((state) => state.quoteState.quotes);

  return (
    <div id="audioPlayer">
      <h3 id="quotesName">
        Quotes from <span>{movie.title} </span>
      </h3>
      <h4 id="h4Title">{title}</h4>
      <audio controls autoPlay src={url} type="audio/mpeg" />
      {quotes.map((quote) => (
        <div>
          <button
            onClick={handleClick}
            value={[quote.title, quote.url]}
            key={quote.title}
            className="playButton"
          >
            ▶
          </button>
          <h3 id="quoteTitle">"{quote.title}"</h3>
          {user ? (
            user.id === quote.userId ? (
              <button
                onClick={() =>
                  history.push(`/movie/${movie.id}/quote/edit/${quote.id}`)
                }
                className="quoteEdit"
              >
                Edit
              </button>
            ) : null
          ) : null}
          {user ? (
            user.id === quote.userId ? (
              <button
                onClick={() =>
                  dispatch(deleteQuote(quote.id)).then(clearPlayer())
                }
                className="quoteDel"
              >
                Delete
              </button>
            ) : null
          ) : null}
        </div>
      ))}
      {user && (
        <div id="createQuote">
          <Link to={`/movie/${id}/quote`} id="addQuote">
            Add a new quote!
          </Link>
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
