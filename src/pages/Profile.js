import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => (
  <div>
    <Header />
    <main className="main">
      <h1>Profile</h1>
      <p>View and update your personal information and requests.</p>
      {/* Future: Add editable profile form */}
    </main>
    <Footer />
  </div>
);

export default Profile;
