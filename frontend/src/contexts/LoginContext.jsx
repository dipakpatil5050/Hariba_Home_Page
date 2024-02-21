import React, { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
        setIsLoggedIn(true);
      }
    };
    checkLoggedInStatus();
  }, []);

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, username }}>
      {children}
    </LoginContext.Provider>
  );
};
