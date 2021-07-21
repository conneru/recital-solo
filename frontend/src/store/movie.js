import { csrfFetch } from "./csrf";

const GET_MOVIES = "movie/getMovies";
const ADD_MOVIE = "movie/addMovie";

export const getMovies = (movies) => {
  return { type: GET_MOVIES, movies };
};

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};

export const fetchMovies = () => async (dispatch) => {
  const res = await fetch("/api/movies");
  if (res.ok) {
    const movies = await res.json();
    dispatch(getMovies(movies));
  }
};
export const fetchOneMovie = (id) => async (dispatch) => {
  const res = await fetch(`/api/movies/${id}`);
  if (res.ok) {
    const movies = await res.json();
    dispatch(getMovies(movies));
  }
};

export const submitForm = (payload) => async(dispatch) => {
  const res = await csrfFetch('/api/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const movie = await res.json()
  if(res.ok)
  dispatch(addMovie(movie))
}

const initialState = { movies: [] };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: [...action.movies] };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.newMovie],
      };
    default:
      return state;
  }
};

export default movieReducer;
