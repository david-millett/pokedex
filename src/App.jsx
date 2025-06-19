import './App.css'

import { getPokemonData } from './services/pokemonService'

function App() {

  const testing = async () => {
    const pokemon = await getPokemonData()
    console.log(pokemon)
  }

  return (
    <>
      <button onClick={testing}>Click</button>
    </>
  )
}

export default App


