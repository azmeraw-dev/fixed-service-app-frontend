import React, { useState } from "react";

export default function RequestForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Request submitted for ${name} at ${address}. Tracking ID: #${Math.floor(Math.random()*10000)}`);
    setName(""); setPhone(""); setAddress(""); setServiceType("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl mb-4">New Service Request</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-2 border rounded" required />
      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-2 mb-2 border rounded" required />
      <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} className="w-full p-2 mb-2 border rounded" required />
      <select value={serviceType} onChange={e => setServiceType(e.target.value)} className="w-full p-2 mb-4 border rounded" required>
        <option value="">Select Service Type</option>
        <option value="internet">Internet</option>
        <option value="phone">Phone Line</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit Request</button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </form>
  );
}
