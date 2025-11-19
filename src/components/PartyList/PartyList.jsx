const PartyList = ({ party }) => {
    return (
        <main>
            {party.map((pokemon) => {
                    return <p>{pokemon.name}</p>
            })}
        </main>

    )
}

export default PartyList