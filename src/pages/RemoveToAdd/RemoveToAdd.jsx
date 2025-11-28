import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getParty, removeFromParty, addToParty } from "../../services/partyService"

// Components
import PartyList from "../../components/PartyList/PartyList"
import Controls from "../../components/Controls/Controls"

// Styling
import styles from './RemoveToAdd.module.scss'

const RemoveToAdd = ({ partyVariables, pendingVariables }) => {

    // Variables
    const [party, setParty] = useState([])
    const { partyCurrent, setPartyCurrent } = partyVariables
    const { pendingPkm } = pendingVariables
    const [deletedPkm, setDeletedPkm] = useState('pokemon')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    
    // Functions
    useEffect(() => {
        const fetchParty = () => {
            try {
                const data = getParty()
                setParty(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchParty()
    }, [])

     // Button Functions
        const moveCursorDown = () => setPartyCurrent(partyCurrent + 1)
        const moveCursorUp = () => setPartyCurrent(partyCurrent - 1)
        const moveCursorEnd = () => setPartyCurrent(party.length - 1)
        const moveCursorStart = () => setPartyCurrent(0)
    
        const bFunction = () => navigate(-1)
    
        const aFunction = () => {
            if (success) {
                navigate('/pokemon')
            } else {
                setDeletedPkm(party[partyCurrent])
                removeFromParty(party, partyCurrent)
                addToParty(party, pendingPkm)
                setSuccess(true)
            }
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
                <h1>Party</h1>
                {success
                    ? <div className={styles.container}>
                        <p>Success!</p>
                        <p>{pendingPkm.name} was added to the party. Welcome!</p>
                        <p>{deletedPkm.name} was removed. Bye!</p>
                        <div className={styles.options}>
                            <p><span className="flash">A</span> Back to pokedex</p>
                            <p><span className="flash">B</span> Back to {pendingPkm.name}</p>
                        </div>
                    </div>

                    : <div className={styles.spacing}>
                        <p>Choose who {pendingPkm.name} will replace</p>
                        <PartyList party={party} partyCurrent={partyCurrent} removeVisible={true} />
                    </div>
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default RemoveToAdd