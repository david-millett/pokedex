import axios from "axios"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getOriginalPokemon = async () => {

    const cachedData = localStorage.getItem('pokemon')
    
    // Check if data is already cached
    if (cachedData) {
        // If so, use cached data
        // Convert the string stored in localStorage back into a JavaScript object
        console.log('Fetched from local storage')
        return JSON.parse(cachedData)
    }

    // If not, fetch the necessary data from the PokeAPI
    const response = await axios.get(`${POKEAPI_URL}?limit=151`)
    const results = response.data.results

    // Save the fetched data to the cache
    // Because localStorage only stores data in string format, need to convert it
    localStorage.setItem('pokemon', JSON.stringify(results))
    console.log(`Pokemon added to cache`)
    return results
}