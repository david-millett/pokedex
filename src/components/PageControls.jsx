const PageControls = ({ pokemon, page, setPage, pageLength }) => {

    // Functions
    const getPageNumbers = (pageFirst, pageLast) => {
        return Array.from({ length: pageLast - pageFirst}, (_, i) => pageFirst + i)
    }
    
    // Variables
    const pageLast = Math.ceil(pokemon.length / pageLength)
    const pages = getPageNumbers(0, pageLast)

    // PageControls
    return (
        <main>
            <button disabled={page === 0} onClick={() => setPage(0)}>&lt;&lt;</button>
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>&lt;</button>
        
            <p>Page</p>
            <select id="page" name="page" value={page + 1} onChange={(e) => {setPage(e.target.value - 1)}}>
            {pages.map((pg) => {
                return <option key={pg + 1} value={pg + 1}>{pg + 1}</option>
            })}
            </select>
            <p>{`of ${pageLast}`}</p>
        
            <button disabled={page === pageLast - 1} onClick={() => setPage(page + 1)}>&gt;</button>
            <button disabled={page === pageLast - 1} onClick={() => setPage(pageLast - 1)}>&gt;&gt;</button>
      </main>
    )
}

export default PageControls