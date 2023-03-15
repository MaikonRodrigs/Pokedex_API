import React, { useContext }from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { UserContext } from './hooks/useContext'
import Home from './pages/home'

function App() {

  return (
    <div>
      <UserContext>
        <GlobalStyle />
        <Home />
      </UserContext>
    </div>
  )
}

export default App
