import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Track = () => {
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    // mock response
    setStatus(`Request ${requestId} is currently: Pending Survey`);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1>Track Service Request</h1>
        <form onSubmit={handleTrack} className="form">
          <input type="text" placeholder="Enter Request ID" value={requestId} onChange={(e) => setRequestId(e.target.value)} required />
          <button type="submit" className="btn">Track</button>
        </form>
        {status && <p>{status}</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Track;
