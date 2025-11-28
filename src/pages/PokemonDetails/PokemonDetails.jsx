import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonInfo } from "../../services/pokemonService"

import { getParty } from "../../services/partyService"
import { addToParty } from "../../services/partyService"

// Components
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo"
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading/Loading"

const PokemonDetails = ({ pendingVariables }) => {

    // Variables
    const [pokemon, setPokemon] = useState(null)
    const { pokeId } = useParams()
    const navigate = useNavigate()
    const { setPendingPkm } = pendingVariables

    // States
    const [pageFlip, setPageFlip] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    // const [showRemoveMenu, setShowRemoveMenu] = useState(false)

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
    const pressB = () => {
        if (pageFlip) {
            // If page has been flipped, set back to original value and show description
            setPageFlip(!pageFlip)
            // Also make sure success and failure messages are removed
            setSuccess(false)
            setFailure(false)
        } else {
            // Go back to previous page
            navigate(-1)
        }
    }

    const pressA = () => {
        // Has a different function depending on the current state

        // * If just failed to add a member to party
        if (failure) {
            navigate('/editTeam')
        
        // * If just successfully added a pokemon
        } else if (success) {
            // Go back to pokedex list
            navigate('/pokemon')

        // * If page has been flipped to second page
        } else if (pageFlip) {
            const partyLimit = 6
            const party = getParty()
            // Attempt to add pokemon to the party
            if (party.length < partyLimit) {
                // Add the current pokemon to your party if there is space
                addToParty(party, pokemon)
                setSuccess(true)
            } else {
                // If the party is full with 6 members, set state to failure
                console.log('party is full')
                setFailure(true)
                setPendingPkm(pokemon)
            }

        // * If page hasn't been flipped
        } else {
            // Hide the description and show add to party options
            setPageFlip(!pageFlip)
        }
    }

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: false},
        right: {function: null, disabled: false},
        down: {function: null, disabled: false},
        left: {function: null, disabled: false},
        a: pressA,
        b: pressB
    }

    return (
        <main>
            <div className="screen">
                {
                    !pokemon
                        ? <Loading />
                        : <PokemonInfo pokemon={pokemon} pageFlip={pageFlip} success={success} failure={failure} />
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default PokemonDetails