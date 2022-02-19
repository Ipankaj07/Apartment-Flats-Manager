import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="headerNav">
        <div className="first_N">
          <Link to="/">
            <img
              src="https://img.icons8.com/bubbles/50/000000/react.png"
              alt=".."
            />
          </Link>
          <div className="logo-name">ρℓαтιηυм</div>
          <div className="nav-text style-text1">
            <Link to="/apartment/1">Apartments</Link>
          </div>
          <div className="nav-text style-text1">Lists</div>
          <div className="nav-text style-text1">About</div>
        </div>
        <div className="second_N">
          <div className="nav-text style-text2">List your property</div>
          <div className="nav-text style-text2">|</div>
          <div className="nav-text style-text2">Sign In / Register</div>
          {/* <img src="https://img.icons8.com/bubbles/50/000000/react.png" /> */}
        </div>
      </div>
    </header>
  );
};

export { Navbar };
