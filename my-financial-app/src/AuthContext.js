import React, { createContext, useState, useContext } from 'react';

// Define the context
const AuthContext = createContext(null);

// Provide context with a component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Login function updates the state to reflect the user's logged-in status
  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  // Logout function clears the state and reflects the user's logged-out status
  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  // The value provided to the context consumers
  const value = {
    isLoggedIn,
    username,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook for components to get auth context
export const useAuth = () => useContext(AuthContext);
