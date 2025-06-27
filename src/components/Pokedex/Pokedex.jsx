import styles from './Pokedex.module.scss'
import pokedex from '../../assets/pokedex.png'
import Table from '../Table/Table'

const Pokedex = () => {
    return (
        <div className={styles.container}>
            <h1>POKEDEX</h1>
            <img src={pokedex} />
            <Table />
        </div>
    )
}

export default Pokedex