import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SalesDashboard = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <h1>Sales Dashboard</h1>
        <div className="card">
          <h3>Recent Requests</h3>
          <p>Manage customer service orders here.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Abebe Kebede</td>
                <td>New Line</td>
                <td><span className="status in-progress">In Progress</span></td>
              </tr>
              <tr>
                <td>102</td>
                <td>Selamawit D.</td>
                <td>Package Upgrade</td>
                <td><span className="status pending">Pending</span></td>
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
