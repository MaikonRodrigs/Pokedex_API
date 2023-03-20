import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UserContext = ({ children }) => {
  const [namePoke, setNamePoke] = useState('')
  const [recentsPokemon, setRecentsPokemon] = useState([])
  const [favoritesPokemon, setFavoritesPokemon] = useState([])


  return (
    <GlobalContext.Provider value={
      { namePoke, setNamePoke, recentsPokemon, setRecentsPokemon, favoritesPokemon, setFavoritesPokemon }
    }>
      {children}
    </GlobalContext.Provider>
  )
};
