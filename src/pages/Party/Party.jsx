import { getParty } from "../../services/partyService"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

// Components
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading"
import PartyList from "../../components/PartyList/PartyList"
import EmptyParty from "../../components/EmptyParty/EmptyParty"

const Party = () => {

    // Variables
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



    const goBack = () => {
        navigate('/')
    }

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: true},
        right: {function: null, disabled: true},
        down: {function: null, disabled: true},
        left: {function: null, disabled: true},
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
                                    : <PartyList party={party}/>
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