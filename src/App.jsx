import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MineProvider } from './utils/MineContext'
import { Game } from './pages/Game'

function App() {



  return (

    <div className="App">
      <MineProvider>
        <Game />
      </MineProvider>
    </div>
  )
}

export default App
