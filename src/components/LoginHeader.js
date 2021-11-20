import React from "react";
import "./LoginHeader.css";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="header">
      <Link className="link" to="/">
      <button className="header__button">Imango</button>
      </Link>
    </div>
  );
}

export default LoginHeader;
