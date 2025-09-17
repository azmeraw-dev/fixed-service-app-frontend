import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => (
  <div>
    <Header />
    <main className="main">
      <h1>Customer Dashboard</h1>
      <p>View your service requests, track status, and manage your profile.</p>
    </main>
    <Footer />
  </div>
);

export default Dashboard;
