import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import logo from "../../images/logo.png";
import create from "../../images/create.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const history = useHistory();
  const credential = "demo@user.io";
  const password = "password";

  function demoLogin() {
    return dispatch(sessionActions.login({ credential, password }));
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="demo" onClick={demoLogin}>
          Demo
        </div>
        <NavLink to="/login" className="profileBut">
          Log In
        </NavLink>
        <NavLink to="/signup" className="profileBut">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav id="navbar">
      <div id="navWrapper">
        <NavLink exact to="/">
          <img src={logo} alt="recital" id="logo" />
        </NavLink>

        <div className="searchBar">
          <form
            onSubmit={() => history.push(`/search/${search}`)}
            id="searchForm"
          >
            <input
              type="text"
              value={search}
              placeholder="Search Movies"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {sessionUser ? (
          <NavLink exact to="/movie/create">
            <img src={create} alt="create new" id="createLogo" />
          </NavLink>
        ) : null}

        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
