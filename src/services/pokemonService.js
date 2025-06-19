import axios from "axios"

const originalPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151'

// const cachedData = {}

// export const getPokemonData = async (pokemon) => {
//     if (!cachedData[pokemon]) {
//         const { data } = await axios.get(`${BASE_URL}/${pokemon}`)
//         cachedData[pokemon] = data
//         console.log(`${pokemon} added to cache`)
//     }
//     return cachedData
// }

// export const getPokemonData = async (pokemon) => {
//     const cachedData = localStorage.getItem(pokemon)
//     if (cachedData) {
//         console.log('Fetched from local storage cache')
//         return JSON.parse(cachedData)
//     }
//     const { data } = await axios.get(`${BASE_URL}/${pokemon}`)
//     localStorage.setItem(pokemon, JSON.stringify(data))
//     console.log(`${pokemon} added to cache`)
//     return data
// }

export const getPokemonData = async () => {

    const cachedData = localStorage.getItem('pokemon')
    
    // Check if data is already cached
    if (cachedData) {
        // If so, use cached data
        console.log('Fetched from local storage cache')
        return JSON.parse(cachedData)
    }

    // If not, fetch the necessary data from the Poke API
    const { data } = await axios.get(originalPokemon)
    
    // Save the fetched data to the cache
    localStorage.setItem('pokemon', JSON.stringify(data.results))
    console.log(`Pokemon added to cache`)
    return data.results
}