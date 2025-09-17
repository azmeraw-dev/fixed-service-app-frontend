import { useContext, useState } from "react";
import { RequestContext } from "../context/RequestContext";

function CustomerDashboard() {
  const { requests, addRequest } = useContext(RequestContext);
  const [form, setForm] = useState({ name: "", location: "", service: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.service) return alert("Fill all fields");
    addRequest(form);
    setForm({ name: "", location: "", service: "" });
  };

  return (
    <div className="max-w-5xl mx-auto mt-6">
      <h2 className="text-3xl font-bold text-ethioBlue mb-4">Customer Dashboard</h2>

      {/* Service Request Form */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Submit New Request</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="text" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="border p-2 rounded"/>
          <input type="text" placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="border p-2 rounded"/>
          <input type="text" placeholder="Service Type" value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="border p-2 rounded"/>
          <button type="submit" className="bg-ethioBlue text-white p-2 rounded hover:bg-blue-800">Submit Request</button>
        </form>
      </div>

      {/* My Requests Table */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">My Requests</h3>
        <table className="min-w-full border border-gray-300 rounded overflow-hidden">
          <thead className="bg-ethioBlue text-white">
            <tr>
              <th className="p-2">Request ID</th>
              <th className="p-2">Service</th>
              <th className="p-2">Location</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(r => (
              <tr key={r.id} className="border-t hover:bg-gray-100">
                <td className="p-2">{r.id}</td>
                <td className="p-2">{r.service}</td>
                <td className="p-2">{r.location}</td>
                <td className="p-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerDashboard;
del