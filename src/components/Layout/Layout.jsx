import React from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Layout = () => {
  function sidebarToggle() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-mobile");
  }
  return (
    <>
      <nav className="navbar container navbar-mobile">
        <FontAwesomeIcon
          className="navbar-open"
          icon={faBars}
          onClick={sidebarToggle}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="navbar-close"
          icon={faXmark}
          onClick={sidebarToggle}
        ></FontAwesomeIcon>

        <div className="navbar-link-container">
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
