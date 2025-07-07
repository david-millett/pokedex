// Styling
import styles from './DPad.module.scss'

const DPad = ({ itemControls, pageLength, allPokemon }) => {

    // Variables
    const { itemFirst, setItemFirst, itemLast, itemCurrent, setItemCurrent } = itemControls

    // Functions
    const moveCursorUp = () => {
        if (itemCurrent === itemFirst) {
            setItemFirst(itemFirst - 1)
        }
        setItemCurrent(itemCurrent - 1)
    }

    const moveCursorDown = () => {
        if (itemCurrent === itemLast - 1) {
            setItemFirst(itemFirst + 1)
        }
        setItemCurrent(itemCurrent + 1)
    }

    const moveCursorRight = () => {
        setItemFirst(Math.min(itemFirst + pageLength, allPokemon.length - pageLength))
        setItemCurrent(Math.min(itemCurrent + pageLength, allPokemon.length - 1))
    }

    const moveCursorLeft = () => {
        setItemFirst(Math.max(itemFirst - pageLength, 0))
        setItemCurrent(Math.max(itemCurrent - pageLength, 0))
    }

    // Component
    return (
        <div className={styles.container}>
            <button disabled={itemCurrent === 0} onClick={moveCursorUp}>U</button>
            <div>
                <button disabled={itemCurrent === 0} onClick={moveCursorLeft}>L</button>
                <div className={styles.space}></div>
                <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorRight}>R</button>
            </div>
            <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorDown}>D</button>
        </div>
    )
}

export default DPad