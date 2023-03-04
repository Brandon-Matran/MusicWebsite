import React from "react";
import "./NavBar.css";
import nightowl from "../assets/nightowl.png";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-bar-container links">
          <img src={nightowl} alt="nightowl" className="owl" />
          <ul style={{ listStyleType: "none" }}>
            <li>
              <NavLink className="home" to="/" aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="events" to="/events" aria-current="page">
                Events
              </NavLink>
            </li>
            <li>
              <Link className="music" to="/music" aria-current="page">
                Music
              </Link>
            </li>
            <li className="store">Store</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
