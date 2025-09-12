import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Styling and assets
import pokedex from "./assets/pokedex.png"

// Pages
import LandingPage from './pages/LandingPage'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'

// App
const App = () => {

  const [itemFirst, setItemFirst] = useState(0)
  const [itemCurrent, setItemCurrent] = useState(0)

  const itemVariables = {
    itemFirst: itemFirst,
    setItemFirst: setItemFirst,
    itemCurrent: itemCurrent,
    setItemCurrent: setItemCurrent
  }

  return (
    <main>
      <h1>Pokedex</h1>
      <img src={pokedex} />
      <Routes>
        {/* Landing page */}
        <Route path='/pokemon' element={<LandingPage itemVariables={itemVariables} />} />
        <Route path='/pokemon/:pokeId' element={<PokemonDetails />} />
        {/* /team */}
      </Routes>
    </main>
  )
}

export default App


