import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import logo from "../../images/logo.png";
import create from "../../images/create.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
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

        {sessionUser ? (
          <NavLink exact to="/movie/create">
            <img src={create} alt="create new" id="createLogo" />
          </NavLink>
        ) : null}

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

        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
