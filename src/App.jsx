import './App.css'

import { getOriginalPokemon } from './services/pokemonService'

function App() {

  const testing = async () => {
    const pokemon = await getOriginalPokemon()
    console.log(pokemon)
  }

  return (
    <>
      <button onClick={testing}>Click</button>
    </>
  )
}

export default App


