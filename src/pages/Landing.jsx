import { getOriginalPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"

// Components
import PageControls from "../components/PageControls"
import Table from "../components/Table"
import Loading from "../components/Loading"

const Landing = () => {

    // Variables

    const [pokemon, setPokemon] = useState([])
    // Fetch data asynchronously on mount, then store it in state
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getOriginalPokemon()
                setPokemon(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokemon()
    }, [])

    
    // Functions
    const testing = async () => {
        const pokemon = await getOriginalPokemon()
        console.log(pokemon)
    }
    
    // Page
    if (pokemon.length === 0) return <Loading />

    return (
        <>
            <h1>Pokedex</h1>
            {/* <PageControls pokemon={pokemon} /> */}
            <Table pokemon={pokemon} />
            <button onClick={testing}>Click</button>
        </>
    )
}

export default Landing