// Styling
import styles from './Controls.module.scss'

// Components
import DPad from "../Dpad/Dpad"
import ABButtons from "../ABButtons/ABButtons"
import StartSelectButtons from "../StartSelectButtons/StartSelectButtons"

const Controls = ({ buttonFunctions }) => {
    return (
        <div className={styles.controls}>
            <StartSelectButtons />
            <div className={styles.lowerControls}>
                <DPad buttonFunctions={buttonFunctions} />
                <ABButtons buttonFunctions={buttonFunctions} />
            </div>
        </div>
    )
}

export default Controls