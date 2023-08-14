import React from "react";
import "../styles/Header.css";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="App-navbar">
        <div className="left-nav">
          <div id="logo_wrapper">
            <a className="logo-container" href="#">
              <span class="logo">EDYODA</span>
              <div class="story">Stories</div>
            </a>
          </div>

          {/* <img src="../assets/logo.png" className="App-logo" alt="logo" /> */}
          {/* <p className="App-logo">
            Edyoda <code>Stories</code>
          </p> */}
          <div className="drop-filter">
            <p className="dropdown">Explore Categories</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
              className="arrow"
              alt="down arrow"
            />
            {/* style={{ width: "30" }} */}
            <ul class="dropdown-content">
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <br />
              <li>
                <a href="#">Cloud Computing</a>
              </li>
              <br />
              <li>
                <a href="#">DevOps</a>
              </li>
              <br />
              <li>
                <a href="#">Programming Languages</a>
              </li>
              <br />
              <li>
                <a href="#">Mobile Application Development</a>
              </li>
              <br />
              <li>
                <a href="#">Technology and Tools</a>
              </li>
              <br />
              <li>
                <a href="#">Get a job in a tech company</a>
              </li>
              <br />
              <li>
                <a href="#">Others</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <p className="desc">
            EdYoda is free learning and knowledge <br />
            sharing platform for techies
          </p>
          <Link
            className="main-page"
            to="https://www.edyoda.com/home"
            target="_blank"
          >
            Go To Main Website
          </Link>
          <Outlet />
        </div>
      </header>
    </>
  );
}

export default Header;
