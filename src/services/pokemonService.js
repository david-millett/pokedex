import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

// const cachedData = {}

// export const getPokemonData = async (pokemon) => {
//     if (!cachedData[pokemon]) {
//         const { data } = await axios.get(`${BASE_URL}/${pokemon}`)
//         cachedData[pokemon] = data
//         console.log(`${pokemon} added to cache`)
//     }
//     return cachedData
// }

export const getPokemonData = async (pokemon) => {
    const cachedData = localStorage.getItem(pokemon)
    if (cachedData) {
        console.log('Fetched from cache')
        return JSON.parse(cachedData)
    }
    const { data } = await axios.get(`${BASE_URL}/${pokemon}`)
    localStorage.setItem(pokemon, JSON.stringify(data))
    console.log(`${pokemon} added to cache`)
    return data
}