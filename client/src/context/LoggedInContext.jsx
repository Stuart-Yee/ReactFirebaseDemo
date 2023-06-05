import React, { createContext, useState } from 'react';
import { checkLogin } from '../utils/authentication';

// Create a new context
export const LoggedInContext = createContext();

// Create a provider component
export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkLogin());

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};
