import styles from './PartyList.module.scss'

const PartyList = ({ party, partyCurrent, removeVisible }) => {
    return (
        <ul className={styles.container}>
            {party.map((pokemon, index) => {
                    return (
                        <li key={index} className={`${styles.pkmLi} ${index === partyCurrent ? styles.current : ''}`}>
                            <p>{pokemon.name}</p>
                            {removeVisible && <p>Remove</p>}
                            {!removeVisible && <p>{pokemon.types.length > 1 ? `${pokemon.types[0].slice(0, 3)}/${pokemon.types[1].slice(0, 3)}` : pokemon.types[0].slice(0, 3)}</p>}
                        </li>
                    )
            })}
        </ul>
    )
}

export default PartyList