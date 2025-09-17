import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SalesDashboard = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Sales Dashboard</h1>
        <p>Manage customer requests and send surveys to technicians.</p>

        {/* Card grid for quick stats */}
        <div className="card-grid">
          <div className="card">
            <h3>Total Requests</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Pending Surveys</h3>
            <p>15</p>
          </div>
          <div className="card">
            <h3>Completed Installs</h3>
            <p>90</p>
          </div>
        </div>

        {/* Requests Table */}
        <div className="card">
          <h3>Customer Requests</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>REQ101</td>
                <td>Abebe Kebede</td>
                <td><span className="badge badge-pending">Pending</span></td>
                <td><button className="btn">Assign Survey</button></td>
              </tr>
              <tr>
                <td>REQ102</td>
                <td>Hana Tesfaye</td>
                <td><span className="badge badge-inprogress">In Progress</span></td>
                <td><button className="btn">Follow Up</button></td>
              </tr>
              <tr>
                <td>REQ103</td>
                <td>Samuel Alemu</td>
                <td><span className="badge badge-completed">Completed</span></td>
                <td><button className="btn">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SalesDashboard;
