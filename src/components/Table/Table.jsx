// Styling
import styles from './Table.module.scss'

// Components
import TypeBadge from "../TypeBadge/TypeBadge"

// Table
const Table = ({ currentPage, itemCurrent }) => {

    // Variables
    // const columns = [ 'number', 'name', 'sprite', 'types']
    const columns = [ 'number', 'name']

    // Component
    return (
        <table className={styles.container}>
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
                        <tr key={pokemon.name} className={pokemon.number === itemCurrent + 1 ? styles.current : ''}>
                            {columns.map((column) => {
                                let content
                                if (column === 'number') {
                                    content = pokemon[column] < 10 ? '00' + pokemon[column] : pokemon[column] < 100 ? '0' + pokemon[column] : pokemon[column]
                                } else if (column === 'name') {
                                    content = pokemon[column].toUpperCase()
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