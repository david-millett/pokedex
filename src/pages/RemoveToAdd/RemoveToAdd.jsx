import { useEffect, useState } from "react"
import { getParty } from "../../services/partyService"

// Components
import Loading from "../../components/Loading"
import PartyList from "../../components/PartyList/PartyList"

const RemoveToAdd = ({ partyVariables, pendingVariables }) => {

    const { partyCurrent } = partyVariables
    const { pendingPkm } = pendingVariables
    const [party, setParty] = useState([])
    
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
            {/* <Controls buttonFunctions={buttonFunctions} /> */}
        </main>
    )
}

export default RemoveToAdd