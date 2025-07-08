// Styling
import styles from './ABButtons.module.scss'

const ABButtons = ({ buttonFunctions }) => {

    // Variables
    const { a } = buttonFunctions

    return (
        <div className={styles.container}>
            <button className={styles.b}>B</button>
            <button className={styles.a} onClick={a}>A</button>
        </div>
    )
}

export default ABButtons