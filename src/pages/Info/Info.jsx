// Components
import Controls from "../../components/Controls/Controls"

const Info = () => {

    // Params
    const buttonFunctions = {
        up: {function: null, disabled: null},
        right: {function: null, disabled: null},
        down: {function: null, disabled: null},
        left: {function: null, disabled: null},
        a: null,
        b: null
    }

    return (
        <main>
            <div className="screen">
                <h1>Info</h1>
                <p>How to use this app</p>
            </div>
            <Controls buttonFunctions={buttonFunctions} />
        </main>
    )
}

export default Info