import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo">HomeTrack</div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/track">Track Request</Link>
      <Link to="/register">Register Service</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login" className="logout">Logout</Link>
    </nav>
  </header>
);

export default Header;
