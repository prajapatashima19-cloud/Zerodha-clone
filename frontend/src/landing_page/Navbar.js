import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "15vh" }}
            alt="Zerodha Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav ms-auto"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active"  to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active"  to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active"  to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active"  to="/support">
                Support
              </Link>
            </li>

            <li className="mx-4 my-2 d-none d-md-block">
              <i class="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
