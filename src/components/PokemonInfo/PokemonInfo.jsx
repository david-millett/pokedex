const PokemonInfo = ({ pokemon }) => {

    // Variables
    const { number, name, types, height, weight } = pokemon
    // ! change sprite from gray to transparent

    // Functions
    // const gramsToPounds = () => {}
    // const cmToFeet = () => {}

    // Component
    return (
        <div>
            <p>{name.toUpperCase()}</p>
            <p>{`No. ${number < 10 ? '00' + number : number < 100 ? '0' + number : number}`}</p>
            <p>{`HT ${height}`}</p>
            <p>{`WT ${weight}`}</p>
            {types.map((type) => {
                return <p>{type}</p>
            })}
        </div>
    )
}

export default PokemonInfo