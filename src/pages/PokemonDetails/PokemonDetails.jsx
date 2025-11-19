import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonInfo } from "../../services/pokemonService"

import { getParty } from "../../services/partyService"
import { addToParty } from "../../services/partyService"

// Components
import PokemonInfo from "../../components/PokemonInfo/PokemonInfo"
import Controls from "../../components/Controls/Controls"
import Loading from "../../components/Loading"

const PokemonDetails = () => {

    // Variables
    const [pokemon, setPokemon] = useState(null)
    const [pageFlip, setPageFlip] = useState(false)
    const [success, setSuccess] = useState(false)
    // const [failure, setFailure] = useState(false)
    // const [pendingPkm, setPendingPkm] = useState(null)
    
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
    const pressB = () => {
        if (pageFlip) {
            // If page has been flipped, set back to original value and show description
            setPageFlip(!pageFlip)
            // Also make sure success message is removed
            setSuccess(false)
        } else {
            // Go back to previous pokedex list
            navigate('/pokemon')
        }
    }

    const pressA = () => {

        // If page has been flipped to second page
        if (pageFlip) {
            const partyLimit = 6
            const party = getParty()
            if (party.length < partyLimit) {
                // Add the current pokemon to your party if the party has space
                addToParty(party, pokemon)
                setSuccess(true)
            } else {
                // If the party is full with 6 members, proceed to options to remove a member
                console.log('party is full')
                // set the pending member
                // navigate to remove pokemon page...
            }

        // If page hasn't been flipped
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
                {/* <div className="filter"></div> */}
                {
                    !pokemon
                        ? <Loading />
                        : <PokemonInfo pokemon={pokemon} pageFlip={pageFlip} success={success} />
                }
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default PokemonDetails