// Styling
import styles from './DPad.module.scss'

const DPad = ({ dPadControls }) => {

    // Variables
    const { up, right, down, left } = dPadControls

    // Component
    return (
        <div className={styles.container}>
            <button disabled={up.disabled} onClick={up.function}>U</button>
            <div>
                <button disabled={left.disabled} onClick={left.function}>L</button>
                <div className={styles.space}></div>
                <button disabled={right.disabled} onClick={right.function}>R</button>
            </div>
            <button disabled={down.disabled} onClick={down.function}>D</button>
        </div>
    )
}

export default DPad