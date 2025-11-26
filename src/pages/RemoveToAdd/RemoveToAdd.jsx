import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getParty, removeFromParty, addToParty } from "../../services/partyService"

// Components
import Loading from "../../components/Loading"
import PartyList from "../../components/PartyList/PartyList"
import Controls from "../../components/Controls/Controls"

const RemoveToAdd = ({ partyVariables, pendingVariables }) => {

    const { partyCurrent, setPartyCurrent } = partyVariables
    const { pendingPkm } = pendingVariables
    const [party, setParty] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchParty = () => {
            try {
                const data = getParty()
                setParty(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchParty()
    }, [])

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
            navigate(-1)
        }
    
        const aFunction = () => {
            removeFromParty(party, partyCurrent)
            addToParty(party, pendingPkm)
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
                    <div>
                        <h1>Party</h1>
                        <p>Choose who to replace with {pendingPkm.name}</p>
                        <PartyList party={party} partyCurrent={partyCurrent} removeVisible={true} />
                    </div>
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default RemoveToAdd