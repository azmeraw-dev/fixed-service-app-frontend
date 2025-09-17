import React, { createContext, useState, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = async (email, password, role) => {
    // For now we simulate login (no backend yet)
    const fakeUser = { email, role };

    // Save to state and localStorage
    setUser(fakeUser);
    localStorage.setItem('user', JSON.stringify(fakeUser));

    return fakeUser;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
