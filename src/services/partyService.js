// Function to fetch the party from local storage, or return an empty array
export const getParty = () => {
    let results
    const party = localStorage.getItem('party')
    if (party) {
        console.log('fetched party')
        results = JSON.parse(party)
    } else {
        console.log('there is no party')
        results = []
    }
    return results
}

// Function to add pokemon to the party
export const addToParty = (party, pokemon) => {
    party.push(pokemon)
    localStorage.setItem('party', JSON.stringify(party))
}


// Function to remove pokemon from the party
export const removeFromParty = (party, pokemonIndex) => {
    party.splice(pokemonIndex, 1)
    localStorage.setItem('party', JSON.stringify(party))
}