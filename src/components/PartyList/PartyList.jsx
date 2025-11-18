const PartyList = ({ party }) => {
    return (
        <main>
            {party.map((pokemon) => {
                    return <p>{pokemon}</p>
            })}
        </main>

    )
}

export default PartyList