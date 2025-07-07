// Styling
import styles from './ABButtons.module.scss'

const ABButtons = () => {
    return (
        <div className={styles.container}>
            <button className={styles.b}>B</button>
            <button className={styles.a}>A</button>
        </div>
    )
}

export default ABButtons