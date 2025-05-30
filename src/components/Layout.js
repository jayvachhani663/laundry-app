import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="#" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="#" style={{ marginRight: "1rem" }}>Pricing</Link>
        <Link to="#" style={{ marginRight: "1rem" }}>Career</Link>
        <Link to="/signin">Sign In</Link>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
