import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ query, setQuery }) => {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="heading-content">
            <h2>Search by Book name</h2>
          </div>

          <div className="input-content">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <Link to="/cart">
          <button id="button2">My BookShelf</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
