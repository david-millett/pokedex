import { Route, Routes } from 'react-router-dom'

// Styling and assets
import pokedex from "./assets/pokedex.png"

// Pages
import LandingPage from './pages/LandingPage'

// App
const App = () => {
  return (
    <main>
      <h1>Pokedex</h1>
      <img src={pokedex} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </main>
  )
}

export default App


