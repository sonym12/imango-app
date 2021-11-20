import React from "react";
import "./HomeHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";


function HomeHeader({ user }) {
  const history = useHistory("");
  if (user === false) {
    history.push("/login");
  }

  const logout = (event) => {
    event.preventDefault();
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="homeHeader">
      <div className="homeHeader__left">
        <Link to="/">
          <button className="homeHeader__logo">Imango</button>
        </Link>
      </div>
      <div className="homeHeader__inputSearch">
        <input type="text" placeholder="Search" />
        <SearchIcon className="homeHeader__inputButton" />
      </div>
      <h3 className="homeHeader__name">{user?.displayName}</h3>
      <button className="logout-header" onClick={logout}>
        <p>Logout</p>
      </button>
    </div>
  );
}

export default HomeHeader;
