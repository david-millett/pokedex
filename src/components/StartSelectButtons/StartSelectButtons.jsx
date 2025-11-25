import { useNavigate } from 'react-router-dom'

// Styling
import styles from './StartSelectButtons.module.scss'

const StartSelectButtons = ({ selectFunction }) => {

    // Variables
    const navigate = useNavigate()

    // Functions
    const startFunction = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <button onClick={startFunction}>Start</button>
            <button onClick={selectFunction || null}>Select</button>
        </div>
    )
}

export default StartSelectButtons