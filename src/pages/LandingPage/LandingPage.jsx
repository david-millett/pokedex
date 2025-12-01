import { useNavigate } from "react-router-dom"
import Controls from "../../components/Controls/Controls"

// Styling and assets
import styles from './LandingPage.module.scss'
import pika from '../../assets/pkmyellowpika.gif'

const LandingPage = ({ menuCurrent, setMenuCurrent }) => {

    // Variables
    const menu = ['pokemon', 'party', 'info']
    const navigate = useNavigate()

    // Functions
    const menuScrollDown = () => {
        if (menuCurrent === menu.length - 1) {
            setMenuCurrent(0)
        } else {
            setMenuCurrent(menuCurrent + 1)
        }
    }

    const menuScrollUp = () => {
        if (menuCurrent === 0) {
            setMenuCurrent(menu.length - 1)
        } else {
            setMenuCurrent(menuCurrent - 1)
        }
    }

    const menuScrollEnd = () => {
        setMenuCurrent(menu.length - 1)
    }

    const menuScrollStart = () => {
        setMenuCurrent(0)
    }

    const menuSelect = () => {
        navigate(`/${menu[menuCurrent]}`)
    }

    // Params
    const buttonFunctions = {
        up: {function: menuScrollUp, disabled: false},
        right: {function: menuScrollEnd, disabled: false},
        down: {function: menuScrollDown, disabled: false},
        left: {function: menuScrollStart, disabled: false},
        a: menuSelect,
        b: null
    }

    return (
        <main className={styles.container}>
            <div className="screen">
                <div className={styles.menu}>
                    <h1>Welcome</h1>
                        {/* <div className="line"></div> */}
                    <div className={styles.welcomeImage}>
                        {/* <p>pika!</p> */}
                        <img src={pika} />
                        {/* <p>pika!</p> */}
                    </div>
                    <ul>
                        {menu.map((item, index) => {
                            return <li key={index} className={index === menuCurrent ? styles.current : ''}>{item}</li>
                        })}
                    </ul>
                    <div className={styles.buttonDeets}>
                        <p><span className="flash">A</span> Enter</p>
                        <p><span className="flash">B</span> Back</p>
                        {/* <p>SRT Return</p> */}
                    </div>
                </div>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default LandingPage