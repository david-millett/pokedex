import { useState } from "react"
import Controls from "../../components/Controls/Controls"

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

    // Params
    const buttonFunctions = {
        up: {function: menuScrollUp, disabled: itemCurrent === 0},
        right: {function: null, disabled: true},
        down: {function: menuScrollDown, disabled: itemCurrent === menu.length - 1},
        left: {function: null, disabled: true},
        a: null,
        b: null
    }

    return (
        <main>
            <div className="screen">
                <h1>Welcome</h1>
                <ul>
                    {menu.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default LandingPage