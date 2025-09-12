import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonInfo } from "../../services/pokemonService"

// Components
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo"
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
    const goBack = () => {
        navigate('/pokemon')
    }

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: false},
        right: {function: null, disabled: false},
        down: {function: null, disabled: false},
        left: {function: null, disabled: false},
        a: null,
        b: goBack
    }

    return (
        <main>
            <div className="screen">
                {/* <div className="filter"></div> */}
                {
                    !pokemon
                        ? <Loading />
                        : <PokemonInfo pokemon={pokemon} />
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default PokemonDetails