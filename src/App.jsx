import React, { useContext }from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { UserContext } from './hooks/useContext'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

function App() {

  return (
    <div>
      <UserContext>
        <GlobalStyle />
        {/* <Home /> */}
        <Pokemon />
      </UserContext>
    </div>
  )
}

export default App
