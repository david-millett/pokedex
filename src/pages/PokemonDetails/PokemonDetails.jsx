import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonInfo } from "../../services/pokemonService"

// Components
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading"

const PokemonDetails = () => {

    // Variables
    const [pokemon, setPokemon] = useState(null)
    
    const { pokeId } = useParams()
    const navigate = useNavigate()

    // ! Functions
    const fetchPokemon = useCallback(async () => {
        try {
            const data = await getPokemonInfo(pokeId)
            setPokemon(data)
        } catch (error) {
            console.log(error)
        }
    }, [pokeId])

    useEffect(() => {
        fetchPokemon()
    }, [pokeId, fetchPokemon])

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
                    !pokemon
                        ? <Loading />
                        : <h1>info</h1>
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default PokemonDetails