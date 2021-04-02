import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
  InstaDrive
      </NavLink>
   
            <div className="navbar-collapse" id="navbarText">
              <ul className="navbar-nav">
              

              <li className="nav-item">

              <Link className="nav-link" to="/user">
                Profile
              </Link>
            </li>

              </ul>
        
              
            </div>
          </nav>
  );
}
