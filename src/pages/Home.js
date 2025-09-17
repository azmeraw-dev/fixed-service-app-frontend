import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Header />
    <main className="main">
      <h1>Ethio Telecom Fixed Service</h1>
      <p>Welcome! Please login to access your dashboard or track service requests.</p>
      <Link to="/login" className="btn">Login</Link>
    </main>
    <Footer />
  </div>
);

export default Home;

