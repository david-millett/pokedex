import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Components
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading"

const PokemonDetails = () => {

    // Variables
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // ! Functions


    // AB button functions
    // ! This resets the list, want it to go back to where we were...
    const goBack = () => {
        navigate('/pokemon')
    }

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: null},
        right: {function: null, disabled: null},
        down: {function: null, disabled: null},
        left: {function: null, disabled: null},
        a: null,
        b: goBack
    }

    return (
        <main>
            <div className="screen">
                {
                    loading
                        ? <Loading />
                        : <h1>info</h1>
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default PokemonDetails