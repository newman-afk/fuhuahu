import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/notes">Notes</Link>
      <Outlet />
    </>
  );
};

export default Layout;
