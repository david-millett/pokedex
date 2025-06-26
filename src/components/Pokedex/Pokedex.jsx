import styles from './Pokedex.module.scss'
import pokedex from '../../assets/pokedex.png'

const Pokedex = () => {
    return (
        <div className={styles.container}>
            <h1>POKEDEX</h1>
            <img src={pokedex} />
        </div>
    )
}

export default Pokedex