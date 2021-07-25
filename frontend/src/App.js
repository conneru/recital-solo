import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import CreateMovie from "./components/CreateMovie";
import EditMovie from "./components/EditMovie";
import CreateQuote from "./components/CreateQuote";
import EditQuote from "./components/EditQuote";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/movies">
            <Home />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/movies/:id">
            <MoviePage />
          </Route>
          <Route path="/movie/create">
            <CreateMovie />
          </Route>
          <Route path="/movie/edit/:id">
            <EditMovie />
          </Route>
          <Route exact path="/movie/:id/quote">
            <CreateQuote />
          </Route>
          <Route path="/movie/:id/quote/edit/:quoteId">
            <EditQuote />
          </Route>
          <Route>
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
