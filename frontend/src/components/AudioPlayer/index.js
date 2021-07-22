import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteQuote } from "../../store/quote";
import { fetchMovies, fetchOneMovie } from "../../store/movie";

function AudioPlayer({ quotes }) {
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

  const user = useSelector((state) => state.session.user);

  return (
    <div>
      <h3>{title}</h3>
      <audio controls autoPlay src={url} type="audio/mpeg" />
      {quotes.map((quote) => (
        <div>
          <h3>{quote.title}</h3>
          <button
            onClick={handleClick}
            value={[quote.title, quote.url]}
            key={quote.title}
          >
            ▶
          </button>
          {user.id === quote.userId ? (
            <button onClick={() => dispatch(deleteQuote(quote.id))}>
              Delete
            </button>
          ) : null}
        </div>
      ))}
      {user && <Link to="/quote/create">Add a new quote!</Link>}
    </div>
  );
}

export default AudioPlayer;
