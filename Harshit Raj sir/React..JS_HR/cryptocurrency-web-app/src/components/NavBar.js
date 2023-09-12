import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <div className="header">
      {/* <h1>NavBar</h1> */}
      <Link to="/">
        <h2 className="siteLogo">Logo</h2>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Explore</Link>
        </li>
        <li>
          <Link to="/">Latest</Link>
        </li>
        <li>
          <Link to="/">Buy</Link>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={() => {
          setClick(!click);
        }}
      >
        {/* //! If click is true change hamburger to close icon & show listItems */}
        {click ? (
          <FaTimes size={35} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={35} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
