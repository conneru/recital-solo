import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editQuote } from "../../store/quote";
import { useHistory, useParams } from "react-router-dom";

function EditQuote() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id, quoteId } = useParams();
  const user = useSelector((state) => state.session.user);
  const quotes = useSelector((state) => state.quoteState.quotes);
  const quote = quotes.find((quote) => quote.id === Number(quoteId));

  const [title, setTitle] = useState(quote.title);
  const [url, setUrl] = useState(quote.url);

  function handleSubmit() {
    const form = {
      userId: user.id,
      movieId: id,
      url,
      title,
    };

    dispatch(editQuote(form, quoteId));
    history.push(`/movies/${id}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quote Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quote Url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default EditQuote;
