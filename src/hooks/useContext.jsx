import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UserContext = ({ children }) => {
  const [namePoke, setNamePoke] = useState('')
  const [recentsPokemon, setRecentsPokemon] = useState([])

  return (
    <GlobalContext.Provider value={
      { namePoke, setNamePoke, recentsPokemon, setRecentsPokemon }
    }>
      {children}
    </GlobalContext.Provider>
  )
};
