import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Styling and assets
import styles from './Info.module.scss'

// Components
import Controls from "../../components/Controls/Controls"

const Info = () => {

    // Variables
    const navigate = useNavigate()
    const [pageFlip, setPageFlip] = useState(false)

    // Functions
    const aFunction = () => {
        setPageFlip(!pageFlip)
    }
    
    const bFunction = () => {
        if (pageFlip) {
            setPageFlip(false)
        } else {
            navigate(-1)
        }
    }

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: null},
        right: {function: null, disabled: null},
        down: {function: null, disabled: null},
        left: {function: null, disabled: null},
        a: aFunction,
        b: bFunction
    }

    return (
        <main>
            <div className={`screen ${styles.container}`}>
                <h1>Info</h1>
                {!pageFlip
                    ? <>
                        <p>Welcome!</p>
                        <p>Use the pokedex app to view info on the original 151 pokemon.</p>
                        <p>You can add up to six of your favourites onto your team, which you can view and edit from the party menu.</p>
                        <p><span className="flash">A</span> Next</p>
                    </>

                    : <>
                        <p>If your team is already full? No problem, you will simply be prompted to remove a member.</p>
                        <p>Thanks to the PokeAPI for the data.</p>
                        <p>Check out my GitHub</p>
                    </>
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default Info