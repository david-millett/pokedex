import axios from "axios"

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemonData = async () => {

    const cachedData = localStorage.getItem('pokemon')
    
    // Check if data is already cached
    if (cachedData) {
        // If so, use cached data
        console.log('Fetched from local storage')
        return JSON.parse(cachedData)
    }

    // If not, fetch the necessary data from the Poke API
    const response = await axios.get(POKEAPI_URL)
    const results = response.data.results

    // Save the fetched data to the cache
    localStorage.setItem('pokemon', JSON.stringify(results))
    console.log(`Pokemon added to cache`)
    return results
}