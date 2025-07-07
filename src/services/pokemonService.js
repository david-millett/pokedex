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

// ! Currently not being used
// Function to isolate the data required for the current page
export const getPage = async (page, pageLength, pokemon) => {

    const itemFirst = page * pageLength
    const itemLast = (page + 1) * pageLength
    
    let results
    const cacheKey = `pokemon-page-${itemFirst + 1}-${itemLast}`
    const cachedData = localStorage.getItem(cacheKey)

    if (cachedData) {
        console.log('Fetched page from cache')
        results = JSON.parse(cachedData)
    } else {
        const pokemonData = pokemon.slice(itemFirst, itemLast)
    
        results = await Promise.all(
            pokemonData.map(async (mon) => {
                const { data } = await axios.get(mon.url)
                const { types, id, sprites } = data

                const cleanTypes = types.map((type) => {
                    return type.type.name
                })

                return {
                    ...mon,
                    number: id,
                    types: cleanTypes,
                    sprite: sprites.versions['generation-viii'].icons.front_default
                }
            })
        )
        console.log('Page added to cache')
        localStorage.setItem(cacheKey, JSON.stringify(results))
    }

    console.log(results)
    return results
}

// Get individual pokemon page
export const getPokemonInfo = async (pokeId) => {
    const pokemon = await axios.get(`${POKEAPI_URL}/${pokeId}/`)
    console.log(pokemon)
}