// Styling
import styles from './StartSelectButtons.module.scss'

const StartSelectButtons = ({ selectFunction }) => {

    

    return (
        <div className={styles.container}>
            <button>Start</button>
            <button onClick={selectFunction ? selectFunction : null}>Select</button>
        </div>
    )
}

export default StartSelectButtons