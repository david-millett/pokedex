export const getPage = (itemFirst, itemLast, pokemon) => {
    const rawData = pokemon.slice(itemFirst, itemLast)
    const processedData = rawData.map((mon) => {
        return {
            ...mon,
            number: Number(mon.url.split('/')[6])
        }
    })
    return processedData
}