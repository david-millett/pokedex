const DPad = ({ itemFirst, setItemFirst, itemLast, itemCurrent, setItemCurrent, pageLength, allPokemon }) => {

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
        <div>
            <button disabled={itemCurrent === 0} onClick={moveCursorUp}>Up</button>
            <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorRight}>Right</button>
            <button disabled={itemCurrent === allPokemon.length - 1} onClick={moveCursorDown}>Down</button>
            <button disabled={itemCurrent === 0} onClick={moveCursorLeft}>Left</button>
        </div>
    )
}

export default DPad