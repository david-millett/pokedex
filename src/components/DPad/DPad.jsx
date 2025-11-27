// Styling
import styles from './DPad.module.scss'

const DPad = ({ buttonFunctions }) => {

    // Variables
    const { up, right, down, left } = buttonFunctions

    // Component
    return (
        <div className={styles.container}>
            <button className={styles.u} disabled={up.disabled} onClick={up.function}>U</button>
            <div>
                <button className={styles.l} disabled={left.disabled} onClick={left.function}>L</button>
                <div className={styles.space}></div>
                <button className={styles.r} disabled={right.disabled} onClick={right.function}>R</button>
            </div>
            <button className={styles.d} disabled={down.disabled} onClick={down.function}>D</button>
        </div>
    )
}

export default DPad