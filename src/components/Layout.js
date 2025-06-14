import { Link, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && (
        <nav className="navbar">
          <div className="logo">LAUNDRY</div> 
          <div className="nav-links">
            <Link to="#">Home</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Career</Link>
            <Link to="/signin" className="signin-btn">Sign In</Link>
          </div>
        </nav>
      )}

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
