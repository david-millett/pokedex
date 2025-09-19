import { useNavigate } from "react-router-dom"
import Controls from "../../components/Controls/Controls"

// Styling and assets
import styles from './LandingPage.module.scss'

const LandingPage = ({ menuCurrent, setMenuCurrent }) => {

    // Variables
    const menu = ['pokemon', 'party']
    const navigate = useNavigate()

    // Functions
    const menuScrollDown = () => {
        setMenuCurrent(menuCurrent + 1)
    }

    const menuScrollUp = () => {
        setMenuCurrent(menuCurrent - 1)
    }

    const menuSelect = () => {
        navigate(`/${menu[menuCurrent]}`)
    }

    // Params
    const buttonFunctions = {
        up: {function: menuScrollUp, disabled: menuCurrent === 0},
        right: {function: menuScrollDown, disabled: menuCurrent === menu.length - 1},
        down: {function: menuScrollDown, disabled: menuCurrent === menu.length - 1},
        left: {function: menuScrollUp, disabled: menuCurrent === 0},
        a: menuSelect,
        b: null
    }

    return (
        <main>
            <div className="screen">
                <h1>Welcome</h1>
                <ul>
                    {menu.map((item, index) => {
                        return <li key={index} className={index === menuCurrent ? styles.current : ''}>{item}</li>
                    })}
                </ul>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default LandingPage