import { getAllPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"

// Components
import PageControls from "../components/PageControls/PageControls"
import Table from "../components/Table/Table"
import Loading from "../components/Loading"

const Landing = () => {

    // Variables
    const [allPokemon, setAllPokemon] = useState([])
    const [page, setPage] = useState(0)
    const pageLength = 10

    // Functions

    // Fetch pokemon data asynchronously on mount, then store it in state
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
    
    // Page
    if (allPokemon.length === 0) return <Loading />

    return (
        <main>
            <h1>Pokedex</h1>
            <PageControls pokemon={allPokemon} page={page} setPage={setPage} pageLength={pageLength} />
            <Table pokemon={allPokemon} page={page} pageLength={pageLength} />
        </main>
    )
}

export default Landing