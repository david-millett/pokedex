import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Styling and assets
import pokedex from "./assets/pokedex.png"

// Pages
import LandingPage from './pages/LandingPage/LandingPage'
import PokedexList from './pages/PokedexList/PokedexList'
import PokemonDetails from './pages/PokemonDetails/PokemonDetails'
import Party from './pages/Party/Party'
import RemoveToAdd from './pages/RemoveToAdd/RemoveToAdd'
import Info from './pages/Info/Info'
import NotExist from './pages/NotExist/NotExist'

// App
const App = () => {

  // Main menu
  const [menuCurrent, setMenuCurrent] = useState(0)

  // Pokedex 
  const [itemFirst, setItemFirst] = useState(0)
  const [itemCurrent, setItemCurrent] = useState(0)
  const [partyCurrent, setPartyCurrent] = useState(0)

  const itemVariables = {
    itemFirst: itemFirst,
    setItemFirst: setItemFirst,
    itemCurrent: itemCurrent,
    setItemCurrent: setItemCurrent
  }

  // Party
  const partyVariables = {
    partyCurrent: partyCurrent,
    setPartyCurrent: setPartyCurrent
  }

  // Pending
  const [pendingPkm, setPendingPkm] = useState(null)

  const pendingVariables = {
    pendingPkm: pendingPkm,
    setPendingPkm: setPendingPkm
  }

  return (
    <main>
      <h1>Pokedex</h1>
      <img src={pokedex} />
      <Routes>
        <Route path='/' element={<LandingPage menuCurrent={menuCurrent} setMenuCurrent={setMenuCurrent} />} />
        <Route path='/pokemon' element={<PokedexList itemVariables={itemVariables} />} />
        <Route path='/pokemon/:pokeId' element={<PokemonDetails pendingVariables={pendingVariables} />} />
        <Route path='/editTeam' element={<RemoveToAdd partyVariables={partyVariables} pendingVariables={pendingVariables} />} />
        <Route path='/party' element={<Party partyVariables={partyVariables} />} />
        <Route path='/info' element={<Info />} />
        {/* Error handling */}
        <Route path='*' element={<NotExist />} />
      </Routes>
    </main>
  )
}

export default App


