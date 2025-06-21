import { useEffect, useState } from "react"
import { getPage } from "../../services/pokemonService"

// Styling
import styles from './Table.module.scss'

// Components
import TypeBadge from "../TypeBadge/TypeBadge"
import Loading from "../Loading"

// Table
const Table = ({ pokemon, page, pageLength }) => {

    // Variables
    const columns = ['number', 'name', 'types']
    const [currentPage, setCurrentPage] = useState([])
    const [loading, setLoading] = useState(true)

    // Functions
    useEffect(() => {
        const fetchPageData = async () => {
            setLoading(true)
            try {
                const data = await getPage(page, pageLength, pokemon)
                setCurrentPage(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false) //is this the best spot for this? could also have an [error, setError] to display something if the request fails
        }
        fetchPageData()
    }, [page, pageLength, pokemon])

    // Component
    if (loading) return <Loading />

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
                                let content
                                if (column === 'number') {
                                    content = pokemon[column]
                                } else if (column === 'name') {
                                    content = pokemon[column].charAt(0).toUpperCase() + pokemon[column].slice(1)
                                } else {
                                    content = <div className={styles.types}>{pokemon[column].map((type) => {
                                        return <TypeBadge key={type} type={type} />
                                    })}</div>
                                }
                                return <td key={column}>{content}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table