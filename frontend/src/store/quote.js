import { csrfFetch } from "./csrf";
const REMOVE_QUOTE = "quote/removeQuote";
const GET_QUOTES = "quote/getQuotes";
const CREATE_QUOTE = "quote/createQuote";
const UPDATE_QUOTE = "quote/updateQuote";

export const getQuotes = (quotes) => {
  return { type: GET_QUOTES, quotes };
};
export const newQuote = (quote) => {
  return { type: CREATE_QUOTE, quote };
};
export const removeQuote = (quoteId) => ({
  type: REMOVE_QUOTE,
  quoteId,
});
export const updateQuote = (quoteId) => ({
  type: UPDATE_QUOTE,
  quoteId,
});

export const getAllQuotes = (movieId) => async (dispatch) => {
  const res = await csrfFetch(`/api/quote/${movieId}`);

  const quotes = await res.json();

  if (res.ok) {
    dispatch(getQuotes(quotes));
  }
};

export const createQuote = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/quote/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const quote = await res.json();
  if (res.ok) {
    dispatch(newQuote(quote));
  }
};

export const deleteQuote = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/quote/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(removeQuote(id));
  }
};

export const editQuote = (payload, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/quote/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const quote = await res.json();
  if (res.ok) {
    console.log(quote);
    dispatch(updateQuote(quote));
  }
};

const initialState = { quotes: [] };

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return { ...state, quotes: [...action.quotes] };
    // case ADD_MOVIE:
    //   return {
    //     ...state,
    //     quotes: [...action.newMovie],
    //   };
    case REMOVE_QUOTE:
      return {
        ...state,
        quotes: [
          ...state.quotes.filter((quote) => quote.id !== action.quoteId),
        ],
      };
    case CREATE_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.quote],
      };
    case UPDATE_QUOTE:
      const quotes = state.quotes.filter(
        (quote) => quote.id !== action.quote.id
      );
      return {
        ...state,
        quote: [...quotes, action.quote],
      };
    default:
      return state;
  }
};

export default quoteReducer;
