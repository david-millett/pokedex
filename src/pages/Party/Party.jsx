import { useNavigate } from "react-router-dom"

// Components
import Controls from "../../components/Controls/Controls"

const Party = () => {

    // Variables
    const navigate = useNavigate()

    // Functions
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
                <h1>PARTY PARTY</h1>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default Party