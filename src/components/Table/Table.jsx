// Styling
import styles from './Table.module.scss'

// Components
import TypeBadge from "../TypeBadge/TypeBadge"

// Table
const Table = ({ currentPage }) => {

    // Variables
    const columns = [ 'number', 'name', 'sprite', 'types']

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
                                } else if (column === 'types') {
                                    content = <div className={styles.types}>{pokemon[column].map((type) => {
                                        return <TypeBadge key={type} type={type} />
                                    })}</div>
                                } else if (column === 'sprite'){
                                    content = <img src={pokemon[column]} />
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