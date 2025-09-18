import { getAllPokemon } from "../services/pokemonService"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getPage } from "../utils/getPage"

// Styling and assets


// Components
import Table from "../components/Table/Table"
import Controls from "../components/Controls/Controls"
import Loading from "../components/Loading"

const LandingPage = ({ itemVariables }) => {

    // Variables
    const { itemCurrent, setItemCurrent, itemFirst, setItemFirst } = itemVariables
    const [allPokemon, setAllPokemon] = useState([])
    const pageLength = 10
    const itemLast = itemFirst + pageLength
    const currentPage = getPage(itemFirst, itemLast, allPokemon)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // ! Functions

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

    // DPad Functions
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

    const moveCursorLeft = () => {
        setItemFirst(Math.max(itemFirst - pageLength, 0))
        setItemCurrent(Math.max(itemCurrent - pageLength, 0))
    }

    // AB button functions
    const openPokePage = () => {
        navigate(`/pokemon/${itemCurrent + 1}`)
    }

    // Params
    const buttonFunctions = {
        up: {function: moveCursorUp, disabled: itemCurrent === 0},
        right: {function: moveCursorRight, disabled: itemCurrent === allPokemon.length - 1},
        down: {function: moveCursorDown, disabled: itemCurrent === allPokemon.length - 1},
        left: {function: moveCursorLeft, disabled: itemCurrent === 0},
        a: openPokePage,
        b: null
    }

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
        <main>
            <div className="screen">
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
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default LandingPage