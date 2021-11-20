import React from "react";
import { Link } from "react-router-dom";
import "./RegisterHeader.css";

function RegisterHeader() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <button className="header__logo">Imango</button>
        </Link>
      </div>
      
    </div>
  );
}

export default RegisterHeader;
