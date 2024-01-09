import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          DASS-Monk
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse navbar-menuop justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                For Student <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button className="signupbutton">Signup</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <div className="d">Hello</div>
  );
}

export default Navbar;
