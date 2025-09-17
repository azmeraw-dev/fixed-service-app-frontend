import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TechnicianDashboard = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Technician Dashboard</h1>
        <div className="card">
          <h3>Assigned Requests</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>301</td>
                <td>Hana Tadesse</td>
                <td>Addis Ababa, Bole</td>
                <td><span className="status pending">Pending</span></td>
                <td><button className="btn">Mark Complete</button></td>
              </tr>
              <tr>
                <td>302</td>
                <td>Bekele A.</td>
                <td>Addis Ababa, Piassa</td>
                <td><span className="status in-progress">In Progress</span></td>
                <td><button className="btn">Mark Complete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicianDashboard;
