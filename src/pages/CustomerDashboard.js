import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomerDashboard = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Customer Dashboard</h1>
        <div className="card">
          <h3>Your Service Requests</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>New Line Installation</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>002</td>
                <td>Internet Upgrade</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;
