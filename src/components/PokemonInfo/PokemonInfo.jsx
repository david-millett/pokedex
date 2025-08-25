import styles from './PokemonInfo.module.scss'

const PokemonInfo = ({ pokemon }) => {

    // Variables
    const { number, name, types, height, weight, sprite } = pokemon
    // ! change sprite from gray to transparent

    // Functions
    // const gramsToPounds = () => {}
    // const cmToFeet = () => {}

    // Component
    return (
        <div className={styles.container}>
            <div className={styles.upperBanner}>
                <img src={sprite} />
                <div>
                    <p>{name.toUpperCase()}</p>
                    <p>{`No. ${number < 10 ? '00' + number : number < 100 ? '0' + number : number}`}</p>
                    <p>HT <strong>{height}</strong></p>
                    <p>WT <strong>{weight}</strong></p>
                </div>
            </div>

            <div>
                {types.map((type, index) => {
                    return <p>TYPE {index + 1}/{type.toUpperCase()}</p>
                })}
            </div>
        </div>
    )
}

export default PokemonInfo