import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Track from './pages/Track';
import SalesDashboard from './pages/SalesDashboard';
import TechnicianDashboard from './pages/TechnicianDashboard';

// Protected route
const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track" element={<Track />} />

        {/* Redirect based on role after login */}
        <Route
          path="/dashboard"
          element={
            user ? (
              user.role === 'technician' ? <Navigate to="/technician" /> : <Navigate to="/sales" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Sales Dashboard → role must be 'sales' */}
        <Route
          path="/sales"
          element={
            <PrivateRoute role="sales">
              <SalesDashboard />
            </PrivateRoute>
          }
        />

        {/* Technician Dashboard → role must be 'technician' */}
        <Route
          path="/technician"
          element={
            <PrivateRoute role="technician">
              <TechnicianDashboard />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
