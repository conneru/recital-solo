import { csrfFetch } from "./csrf";

const GET_MOVIES = "movie/getMovies";
const ADD_MOVIE = "movie/addMovie";
const REMOVE_MOVIE = 'movie/removeMovie'
const EDIT_MOVIE = 'movie/editMovie'

export const updateMovie = (movie)=>{
  return {type:EDIT_MOVIE, movie};
}

export const getMovies = (movies) => {
  return { type: GET_MOVIES, movies };
};


export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};

export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  movieId,
});

export const editMovie = (payload, id) => async (dispatch) => {
const res = await csrfFetch(`/api/movies/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const movie = await res.json()
  if(res.ok){
  dispatch(updateMovie(movie))
  }
};

export const deleteMovie = (id)=> async (dispatch)=>{
  const res = await csrfFetch(`/api/movies/${id}`,{
    method:'DELETE'
  })
  if(res.ok){
    dispatch(removeMovie(id))
  }
}

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
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: [state.movies.filter(movie=> movie.id !== action.movieId)]
      }
    case EDIT_MOVIE:
      const newState = Object.assign({},state)
      let movie = newState.movies.find(obj=> obj.id === action.movieId)
      movie = action.movie
      return{
        ...newState
      }
    default:
      return state;
  }
};

export default movieReducer;
