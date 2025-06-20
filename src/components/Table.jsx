const Table = ({ pokemon }) => {

    // Variables
    const columns = ['name']

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
                {pokemon.map((mon) => {
                    return (
                        <tr key={mon.name}>
                            {columns.map((column) => {
                                return (
                                    <td key={`${mon} ${column}`}>
                                        {mon[column].charAt(0).toUpperCase() + mon[column].slice(1)}
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