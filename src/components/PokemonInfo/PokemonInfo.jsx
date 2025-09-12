import styles from './PokemonInfo.module.scss'

const PokemonInfo = ({ pokemon }) => {

    // Variables
    const { number, name, types, height, weight, sprite, species, description } = pokemon
    
    // Functions
    const convertHeight = (decimeterHeight) => {
        const converted = decimeterHeight * 0.328
        let feet = Math.floor(converted)
        let inches = Math.ceil((converted - feet) * 12)
        if (inches === 12) {
            feet++
            inches = 0
        }
        return `${feet}' ${inches < 10 ? "0" + inches : inches}"`
    }

    const convertWeight = (hectogramWeight) => {
        const converted = Math.round(hectogramWeight * 0.22)
        return `${converted}.0 lb`
    }

    // Component
    return (
        <div className={styles.container}>
            <div className={styles.upperBanner}>
                <div className={styles.imageBlock}>
                    <img src={sprite} />
                    <p>{`No. ${number < 10 ? '00' + number : number < 100 ? '0' + number : number}`}</p>
                </div>
                <div className={styles.headlineInfo}>
                    <p>{name.toUpperCase()}</p>
                    <p>{species.toUpperCase()}</p>
                    <p>HT <strong>{convertHeight(height)}</strong></p>
                    <p>WT <strong>{convertWeight(weight)}</strong></p>
                </div>
            </div>
            <div className={styles.line}></div>
            {/* <div>
                {types.map((type, index) => {
                    return <p key={index}>TYPE {index + 1}/{type.toUpperCase()}</p>
                })}
            </div> */}
            <p>{description}</p>
        </div>
    )
}

export default PokemonInfo