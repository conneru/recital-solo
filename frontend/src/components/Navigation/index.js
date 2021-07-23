import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [search, setSearch] = useState("");

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav id="navbar">
      <div id="navWrapper">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/movies">
              All Movies
            </NavLink>
            <NavLink exact to="/movie/create">
              Create Movie
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">🔎</button>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;
