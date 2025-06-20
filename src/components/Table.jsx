import { useEffect, useState } from "react"
import { getPage } from "../services/pokemonService"

const Table = ({ pokemon, page, pageLength }) => {

    // Variables
    const columns = ['name']
    const [currentPage, setCurrentPage] = useState([])

    // Functions
    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const data = await getPage(page, pageLength, pokemon)
                setCurrentPage(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPageData()
    }, [page, pageLength, pokemon])

    // Table
    return (
        <table>
            
            <thead>
                <tr>
                    {columns.map((column) => {
                        return (
                            <th key={column}>
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                            </th>
                        )
                    })}
                </tr>
            </thead>

            <tbody>
                {currentPage.map((pokemon) => {
                    return (
                        <tr key={pokemon.name}>
                            {columns.map((column) => {
                                return (
                                    <td key={`${pokemon} ${column}`}>
                                        {pokemon[column].charAt(0).toUpperCase() + pokemon[column].slice(1)}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table