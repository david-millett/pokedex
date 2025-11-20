import styles from './PartyList.module.scss'

const PartyList = ({ party, partyCurrent }) => {
    return (
        <main className={styles.container}>
            {party.map((pokemon, index) => {
                    return (
                        <div className={`${styles.pkmLi} ${index === partyCurrent ? styles.current : ''}`}>
                            <p>{pokemon.name}</p>
                            <p>{pokemon.types.length > 1 ? `${pokemon.types[0].slice(0, 3)}/${pokemon.types[1].slice(0, 3)}` : pokemon.types[0].slice(0, 3)}</p>
                        </div>
                    )
            })}
        </main>

    )
}

export default PartyList