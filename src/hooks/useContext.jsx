import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UserContext = ({ children }) => {
  const [namePoke, setNamePoke] = useState('ditto')
  return (
    <GlobalContext.Provider value={{ namePoke, setNamePoke }}>
      {children}
    </GlobalContext.Provider>
  )
};