const Table = ({ pokemon }) => {

    // Variables
    const columns = ['name']

    // Table
    return (
        <table>
            
            {/* Table header */}
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

            {/* Table body */}
            <tbody>
                {pokemon.map((mon) => {
                    return (
                        <tr key={mon.name}>
                            {columns.map((column) => {
                                return <td key={`${mon} ${column}`}>{mon[column]}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table