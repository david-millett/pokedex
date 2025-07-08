import { Route, Routes } from 'react-router-dom'

// Styling and assets
import pokedex from "./assets/pokedex.png"

// Pages
import LandingPage from './pages/LandingPage'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'

// App
const App = () => {
  return (
    <main>
      <h1>Pokedex</h1>
      <img src={pokedex} />
      <Routes>
        {/* Landing page */}
        <Route path='/pokemon' element={<LandingPage />} />
        <Route path='/pokemon/:pokeId' element={<PokemonDetails />} />
        {/* /team */}
      </Routes>
    </main>
  )
}

export default App


