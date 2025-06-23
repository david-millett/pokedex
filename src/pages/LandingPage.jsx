import { getAllPokemon, getPage } from "../services/pokemonService"
import { useState, useEffect } from "react"

// Components
import PageControls from "../components/PageControls/PageControls"
import Table from "../components/Table/Table"
import Loading from "../components/Loading"

const LandingPage = () => {

    // Variables
    const [allPokemon, setAllPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [currentPage, setCurrentPage] = useState([])
    const [loading, setLoading] = useState(true)
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

    // Fetch data needed for the current page of pokemon table
    useEffect(() => {
            const fetchPageData = async () => {
                setLoading(true)
                try {
                    const data = await getPage(page, pageLength, allPokemon)
                    setCurrentPage(data)
                } catch (error) {
                    console.log(error)
                }
                setLoading(false) //is this the best spot for this? could also have an [error, setError] to display something if the request fails
            }
            fetchPageData()
        }, [page, pageLength, allPokemon])
    
    // Page
    return (
        <main>
            <h1>Pokedex</h1>
            <PageControls pokemon={allPokemon} page={page} setPage={setPage} pageLength={pageLength} />
            {
                loading
                    ? <Loading />
                    : (
                        <>
                            <Table currentPage={currentPage} />
                            <p>Showing {page * pageLength + 1}-{(page + 1) * pageLength} of {allPokemon.length} pokemon</p>
                        </>
                    )
            }
        </main>
    )
}

export default LandingPage