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

  console.log('Navbar user:', user); // Debug

  return (
    <nav className="navbar">
      <Link to="/">HomeTrack</Link>

      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/track">Track Request</Link>

          {user.role === 'customer' && <Link to="/sales">Sales Dashboard</Link>}
          {user.role === 'technician' && <Link to="/technician">Technician Dashboard</Link>}

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

