import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const login = async (userCredentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true) 
        console.log(userCredentials.username);// Assume your backend returns user details
        return "Logged in successfully";
      } else {
        throw new Error(data.message || "Failed to login");
      }
    } catch (error) {
      throw error; // Throw an error to be caught in the calling component
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
