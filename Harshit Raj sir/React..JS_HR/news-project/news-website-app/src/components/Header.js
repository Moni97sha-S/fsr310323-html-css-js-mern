import React from "react";
import "../styles/Header.css";
function Header(props) {
  // console.log(props);
  return (
    // <h1>This is my Header</h1>
    <header className="header">
      <div className="logo-title">
        <img
          src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2018/05/NDTV.png?fit=600%2C400&ssl=1"
          alt=""
          className="logo"
        />
        <h1 className="title">My News App</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">SERVICES</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
          <li>
            <a href="/">{props.data.info.name}</a>
          </li>
          <li>
            <img src={props.data.info.picture} alt="" className="profile" />
          </li>
          <li>
            <button
              onClick={() => {
                window.localStorage.clear();
                window.location.assign("http://localhost:3000/");
              }}
            >
              LogOut
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
