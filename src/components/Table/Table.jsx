import { useEffect, useState } from "react"
import { getPage } from "../../services/pokemonService"

// Styling
import styles from './Table.module.scss'

// Components
import TypeBadge from "../TypeBadge/TypeBadge"

// Table
const Table = ({ pokemon, page, pageLength }) => {

    // Variables
    const columns = ['number', 'name', 'types']
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

    // Component
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