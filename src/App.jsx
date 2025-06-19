import './App.css'

import { getPokemonData } from './services/pokemonService'

function App() {

  const testing = async () => {
    const bulbasaur = await getPokemonData(3)
    console.log(bulbasaur.name)
  }

  return (
    <>
      <button onClick={() => testing()}>Click</button>
    </>
  )
}

export default App
