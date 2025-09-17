import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <h2>HomeTrack</h2>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/track">Track Request</Link>

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register Service</Link>
          </>
        )}

        {user && (
          <>
            {/* Show dashboard link based on role */}
            {user.role === 'sales' && <Link to="/sales">Sales Dashboard</Link>}
            {user.role === 'technician' && <Link to="/technician">Technician Dashboard</Link>}

            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;


