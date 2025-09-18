import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Styling and assets
import pokedex from "./assets/pokedex.png"

// Pages
import LandingPage from './pages/LandingPage/LandingPage'
import PokedexList from './pages/PokedexList'
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
        <Route path='/' element={<LandingPage />} />
        <Route path='/pokemon' element={<PokedexList itemVariables={itemVariables} />} />
        <Route path='/pokemon/:pokeId' element={<PokemonDetails />} />
        {/* /team */}
      </Routes>
    </main>
  )
}

export default App


