import { getAllPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"
import { getPage } from "../utils/getPage"

// Styling and assets
import styles from './LandingPage.module.scss'
import pokedex from "../assets/pokedex.png"

// Components
import PageControls from "../components/PageControls/PageControls"
import Table from "../components/Table/Table"
import Loading from "../components/Loading"

const LandingPage = () => {

    // Variables
    const [allPokemon, setAllPokemon] = useState([])
    const [page, setPage] = useState(0)
    // const [currentPage, setCurrentPage] = useState([])
    const [loading, setLoading] = useState(false) //Need to set to true if actually using. To look at and tidy up later
    const pageLength = 10

    const [itemFirst, setItemFirst] = useState(0)
    // const [itemLast, setItemLast] = useState(10)
    const itemLast = itemFirst + 10
    const [itemCurrent, setItemCurrent] = useState(0)


    const currentPage = getPage(itemFirst, itemLast, allPokemon)

    // Functions

    // Fetch pokemon data asynchronously on mount, then store it in state
    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true)
            try {
                const data = await getAllPokemon()
                setAllPokemon(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchPokemon()
    }, [])

    // // Fetch data needed for the current page of pokemon table
    // useEffect(() => {
    //         const fetchPageData = async () => {
    //             setLoading(true)
    //             try {
    //                 const data = await getPage(page, pageLength, allPokemon)
    //                 setCurrentPage(data)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //             setLoading(false) //is this the best spot for this? could also have an [error, setError] to display something if the request fails
    //         }
    //         fetchPageData()
    //     }, [page, pageLength, allPokemon])
    
    const moveCursorUp = () => {
        if (itemCurrent === itemFirst) {
            setItemFirst(itemFirst - 1)
        }
        setItemCurrent(itemCurrent - 1)
    }

    const moveCursorDown = () => {
        if (itemCurrent === itemLast - 1) {
            setItemFirst(itemFirst + 1)
        }
        setItemCurrent(itemCurrent + 1)
    }

    const moveCursorRight = () => {
        setItemFirst(Math.min(itemFirst + pageLength, allPokemon.length - pageLength))
        setItemCurrent(Math.min(itemCurrent + pageLength, allPokemon.length - 1))
    }


    // Page
    return (
        <main className={styles.container}>
            <h1>Pokedex</h1>
            
            <PageControls pokemon={allPokemon} page={page} setPage={setPage} pageLength={pageLength} itemFirst={itemFirst} setItemFirst={setItemFirst} />
            <img src={pokedex} />
            <div className={styles.screen}>
                {
                    loading
                        ? <Loading />
                        : (
                            <>
                                <Table currentPage={currentPage} itemCurrent={itemCurrent} />
                                {/* <p>Showing {page * pageLength + 1}-{(page + 1) * pageLength} of {allPokemon.length} pokemon</p> */}
                            </>
                        )
                }
            </div>
            <button disabled={itemCurrent === 0} onClick={moveCursorUp}>Up</button>
            <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorRight}>Right</button>
            <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorDown}>Down</button>
        </main>
    )
}

export default LandingPage