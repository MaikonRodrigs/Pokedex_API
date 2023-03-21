import React, { useContext }from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { UserContext } from './hooks/useContext'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import * as C from './components/index'

function App() {

  return (
    <div>
      <UserContext>
        <GlobalStyle />
        {/* <Home /> */}
        <Pokemon />
        <C.Footer />
      </UserContext>
    </div>
  )
}

export default App
