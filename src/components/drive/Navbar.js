import React from "react";
import { Navbar, Nav , NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
    SafeDrive
      </NavLink>
   
            <div className="navbar-collapse" id="navbarText">
              <ul className="navbar-nav">
              

              <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>

              </ul>
        
              
            </div>
          </nav>
  );
}
