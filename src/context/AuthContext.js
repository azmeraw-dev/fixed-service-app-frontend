import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Temporary login function for testing
  const login = async (email, password) => {
    const testUsers = [
      { email: 'tech@example.com', role: 'technician', name: 'John Technician' },
      { email: 'customer@example.com', role: 'customer', name: 'Jane Customer' },
    ];

    const foundUser = testUsers.find(u => u.email === email);

    if (!foundUser) {
      throw new Error('User not found');
    }

    console.log('Logging in:', foundUser); // Debug
    setUser(foundUser);
    return foundUser;
  };

  const logout = () => {
    console.log('Logging out'); // Debug
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
