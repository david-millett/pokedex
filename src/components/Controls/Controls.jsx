// Styling
import styles from './Controls.module.scss'

// Components
import DPad from "../Dpad/Dpad"
import ABButtons from "../ABButtons/ABButtons"
import StartSelectButtons from "../StartSelectButtons/StartSelectButtons"

const Controls = ({ buttonFunctions, selectFunction }) => {
    return (
        <div className={styles.controls}>
            <StartSelectButtons selectFunction={selectFunction} />
            <div className={styles.lowerControls}>
                <DPad buttonFunctions={buttonFunctions} />
                <ABButtons buttonFunctions={buttonFunctions} />
            </div>
        </div>
    )
}

export default Controls