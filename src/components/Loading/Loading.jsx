// import pikachu from '../../assets/pkmyellowpika.gif'
import loader from '../../assets/loader8bit.gif'
import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loader} />
            <p>Loading...</p>
        </div>
    )
}

export default Loading