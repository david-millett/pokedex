import axios from "axios"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

// Function to get list of all original 151 pokemon and save them to local storage
export const getAllPokemon = async () => {

    let results
    const cachedData = localStorage.getItem('pokemon')
    
    // Check if data is already cached
    if (cachedData) {
        // If so, use cached data
        console.log('Fetched from local storage')
        // Convert the string stored in localStorage back into a JavaScript object
        results = JSON.parse(cachedData)
    } else {   
        // If not, fetch the necessary data from the PokeAPI
        const response = await axios.get(`${POKEAPI_URL}?limit=151`)
        results = response.data.results
        
        // Save fetched data to the cache
        // Because localStorage only stores data in string format, need to convert it
        localStorage.setItem('pokemon', JSON.stringify(results))
        console.log(`Pokemon added to cache`)
    }
    return results
}

// Function to isolate the data required for the current page
export const getPage = async (page, pageLength, pokemon) => {
    const itemFirst = page * pageLength
    const itemLast = (page + 1) * pageLength

    const pokemonData = pokemon.slice(itemFirst, itemLast)
    // const response = await 

    return pokemonData
}