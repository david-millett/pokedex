export const getParty = () => {
    const party = localStorage.getItem('party')
    if (party) {
        console.log('fetched party')
        return party
    } else {
        console.log('there is no party')
        return []
    }
}


