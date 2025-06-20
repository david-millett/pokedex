import { getOriginalPokemon } from "../services/pokemonService"

const Landing = () => {

    // Variables

    // Functions
    const testing = async () => {
        const pokemon = await getOriginalPokemon()
        console.log(pokemon)
    }

    // Page
    return (
        <>
            <h1>Pokedex</h1>
            <button onClick={testing}>Click</button>
        </>
    )
}

export default Landing