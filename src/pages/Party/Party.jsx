import { getParty } from "../../services/partyService"
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"

import { removeFromParty } from "../../services/partyService"

// Components
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading/Loading"
import PartyList from "../../components/PartyList/PartyList"
import EmptyParty from "../../components/EmptyParty/EmptyParty"

const Party = ({ partyVariables }) => {

    // Variables
    const { partyCurrent, setPartyCurrent } = partyVariables
    const [party, setParty] = useState([])
    const [removeVisible, setRemoveVisible] = useState(false)
    // const defaultMessage = '[Press Select to edit]'
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // Functions
    const fetchParty = useCallback(() => {
        setLoading(true)
        try {
            const data = getParty()
            setParty(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }, [])
    
    useEffect(() => {
        fetchParty()
    }, [fetchParty])


    // Button Functions
    const moveCursorDown = () => {
        setPartyCurrent(partyCurrent + 1)
        // console.log(partyCurrent)
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

    const bFunction = () => {
        if (removeVisible) {
            setRemoveVisible(false)
        } else {
            navigate('/')
        }
    }

    const aFunction = () => {
        if (removeVisible) {
            setMessage(`Goodbye, ${party[partyCurrent].name}!`)
            removeFromParty(party, partyCurrent)
            fetchParty()
            setRemoveVisible(false)
            setPartyCurrent(0)
        } else {
            navigate(`/pokemon/${party[partyCurrent].number}`)
        }
    }

    const selectFunction = () => {
        setMessage(null)
        setRemoveVisible(!removeVisible)
    }

    // Params
    const buttonFunctions = {
        up: {function: moveCursorUp, disabled: partyCurrent === 0},
        right: {function: moveCursorEnd, disabled: null},
        down: {function: moveCursorDown, disabled: partyCurrent === party.length - 1},
        left: {function: moveCursorStart, disabled: null},
        a: aFunction,
        b: bFunction
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
                                <p>{message}</p>
                                {!message && party.length > 0 && <p>{removeVisible ? 'Choose who to remove' : '[Press Select to edit]'}</p>}
                                {party.length === 0
                                    ? <EmptyParty />
                                    : <PartyList party={party} partyCurrent={partyCurrent} removeVisible={removeVisible}/>
                                }
                            </>
                        )
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} selectFunction={party.length > 0 ? selectFunction : null} />
        </main>
    )
}

export default Party