import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createQuote } from "../../store/quote";
import { useHistory, useParams } from "react-router-dom";

function CreateQuote() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  function handleSubmit() {
    const form = {
      userId: user.id,
      movieId: id,
      url,
      title,
    };

    dispatch(createQuote(form));
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

export default CreateQuote;
