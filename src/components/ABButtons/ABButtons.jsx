// Styling
import styles from './ABButtons.module.scss'

const ABButtons = ({ aFunction, bFunction }) => {
    return (
        <div className={styles.container}>
            <button className={styles.b} onClick={bFunction}>B</button>
            <button className={styles.a} onClick={aFunction}>A</button>
        </div>
    )
}

export default ABButtons