import { getAllPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"

// Components
import PageControls from "../components/PageControls/PageControls"
import Table from "../components/Table"
import Loading from "../components/Loading"

const Landing = () => {

    // Variables

    const [page, setPage] = useState(0)
    const pageLength = 10


    const [allPokemon, setAllPokemon] = useState([])
    // Fetch data asynchronously on mount, then store it in state
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getAllPokemon()
                setAllPokemon(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokemon()
    }, [])

    
    // Functions
    const testing = async () => {
        const pokemon = await getAllPokemon()
        console.log(pokemon)
    }
    
    // Page
    if (allPokemon.length === 0) return <Loading />

    return (
        <main>
            <h1>Pokedex</h1>
            <PageControls pokemon={allPokemon} page={page} setPage={setPage} pageLength={pageLength} />
            <Table pokemon={allPokemon} page={page} pageLength={pageLength} />
            <button onClick={testing}>Click</button>
        </main>
    )
}

export default Landing