import { getParty } from "../../services/partyService"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

// Components
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading"
import PartyList from "../../components/PartyList/PartyList"
import EmptyParty from "../../components/EmptyParty/EmptyParty"

const Party = ({ partyVariables }) => {

    // Variables
    const { partyCurrent, setPartyCurrent } = partyVariables
    const [party, setParty] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // Functions
    useEffect(() => {
        const fetchParty = () => {
            setLoading(true)
            try {
                const data = getParty()
                setParty(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchParty()
    }, [])


    // Button Functions
    const moveCursorDown = () => {
        setPartyCurrent(partyCurrent + 1)
    }

    const moveCursorUp = () => {
        setPartyCurrent(partyCurrent - 1)
    }

    const moveCursorEnd = () => {
        setPartyCurrent(party.length - 1)
    }

    const moveCursorStart = () => {
        setPartyCurrent(0)
    }

    const goBack = () => {
        navigate('/')
    }

    // Params
    const buttonFunctions = {
        up: {function: moveCursorUp, disabled: partyCurrent === 0},
        right: {function: moveCursorEnd, disabled: null},
        down: {function: moveCursorDown, disabled: partyCurrent === party.length - 1},
        left: {function: moveCursorStart, disabled: null},
        a: null,
        b: goBack
    }

    return (
        <main>
            <div className="screen">
                {
                    loading
                        ? <Loading />
                        : (
                            <>
                                <h1>PARTY</h1>
                                {party.length === 0
                                    ? <EmptyParty />
                                    : <PartyList party={party} partyCurrent={partyCurrent}/>
                                }
                            </>
                        )
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default Party