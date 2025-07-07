import { getAllPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"
import { getPage } from "../utils/getPage"

// Styling and assets
import styles from './LandingPage.module.scss'

// Components
import Table from "../components/Table/Table"
import DPad from "../components/Dpad/Dpad"
import ABButtons from "../components/ABButtons/ABButtons"
import StartSelectButtons from "../components/StartSelectButtons/StartSelectButtons"
import Loading from "../components/Loading"

const LandingPage = () => {

    // Variables
    const [allPokemon, setAllPokemon] = useState([])
    const [itemFirst, setItemFirst] = useState(0)
    const [itemCurrent, setItemCurrent] = useState(0)
    const pageLength = 10
    const itemLast = itemFirst + pageLength
    const currentPage = getPage(itemFirst, itemLast, allPokemon)
    const [loading, setLoading] = useState(true)

    const itemControls = {
        itemFirst,
        setItemFirst,
        itemCurrent,
        setItemCurrent,
        itemLast
    }

    // Functions
    useEffect(() => {
        // Fetch pokemon data asynchronously on mount, then store it in state
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

    // Page
    return (
        <main className={styles.container}>
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
            <div className={styles.controls}>
                <StartSelectButtons />
                <div className={styles.lowerControls}>
                    <DPad itemControls={itemControls} pageLength={pageLength} allPokemon={allPokemon} />
                    <ABButtons />
                </div>
            </div>
        </main>
    )
}

export default LandingPage