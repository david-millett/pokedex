import { useState } from "react"
import Controls from "../../components/Controls/Controls"

import styles from './LandingPage.module.scss'

const LandingPage = () => {

    // Variables
    const menu = ['pokedex', 'party']
    const [itemCurrent, setItemCurrent] = useState(0)

    // Functions
    const menuScrollDown = () => {
        setItemCurrent(itemCurrent + 1)
    }

    const menuScrollUp = () => {
        setItemCurrent(itemCurrent - 1)
    }

    const menuSelect = () => {

    }

    // Params
    const buttonFunctions = {
        up: {function: menuScrollUp, disabled: itemCurrent === 0},
        right: {function: menuScrollDown, disabled: itemCurrent === menu.length - 1},
        down: {function: menuScrollDown, disabled: itemCurrent === menu.length - 1},
        left: {function: menuScrollUp, disabled: itemCurrent === 0},
        a: menuSelect,
        b: null
    }

    return (
        <main>
            <div className="screen">
                <h1>Welcome</h1>
                <ul>
                    {menu.map((item, index) => {
                        return <li key={index} className={index === itemCurrent ? styles.current : ''}>{item}</li>
                    })}
                </ul>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default LandingPage