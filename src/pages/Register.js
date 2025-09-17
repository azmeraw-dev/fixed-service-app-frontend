import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service request submitted for ${formData.name}`);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1>Register Service Request</h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <input type="text" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
          <select value={formData.serviceType} onChange={(e) => setFormData({...formData, serviceType: e.target.value})} required>
            <option value="">Select Service Type</option>
            <option value="fixed-line">Fixed Line</option>
            <option value="broadband">Broadband Internet</option>
          </select>
          <button type="submit" className="btn">Submit Request</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
