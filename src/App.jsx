import { Route, Routes } from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage'
import Pokedex from './components/Pokedex/Pokedex'

// App
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='dex' element={<Pokedex />} />
      </Routes>
    </>
  )
}

export default App


