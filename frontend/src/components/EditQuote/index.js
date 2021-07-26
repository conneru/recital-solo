import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editQuote, getAllQuotes } from "../../store/quote";
import { useHistory, useParams } from "react-router-dom";
import "./EditQuote.css";
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
    dispatch(getAllQuotes(id));
    history.push(`/movies/${id}`);
  }
  return (
    <form onSubmit={handleSubmit} id="create">
      <label for="title">Edit Quote Title</label>
      <input
        type="text"
        placeholder="Quote Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="url">Edit Quote Url</label>
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
