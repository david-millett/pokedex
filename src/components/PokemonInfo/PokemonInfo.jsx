import styles from './PokemonInfo.module.scss'

const PokemonInfo = ({ pokemon, pageFlip }) => {

    // Variables
    const { number, name, height, weight, sprite, species, description, types } = pokemon
    
    // Functions
    const convertHeight = (decimeterHeight) => {
        const converted = decimeterHeight * 0.328
        let feet = Math.floor(converted)
        let inches = Math.ceil((converted - feet) * 12)
        if (inches === 12) {
            feet++
            inches = 0
        }
        return `${feet}'${inches < 10 ? "0" + inches : inches}"`
    }

    const convertWeight = (hectogramWeight) => {
        const converted = Math.round(hectogramWeight * 0.22)
        return `${converted}.0lb`
    }

    // Component
    return (
        <div className={styles.container}>
            <div className={styles.upperBanner}>
                <div className={styles.imageBlock}>
                    <img src={sprite} />
                    <p className='number'>{`No.${number < 10 ? '00' + number : number < 100 ? '0' + number : number}`}</p>
                </div>
                <div className={styles.headlineInfo}>
                    <p>{name.toUpperCase()}</p>
                    <p>{species.toUpperCase()}</p>
                    <p>HT <span className='number'>{convertHeight(height)}</span></p>
                    <p>WT <span className='number'>{convertWeight(weight)}</span></p>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={pageFlip ? styles.hidden : ''}>
                <p>{description}</p>
                <div className={styles.pressMe}><p>A</p></div>

            </div>
            <div className={`${pageFlip ? '' : styles.hidden} ${styles.flippedPage}`}>
                <div>
                    {types.map((type, index) => {
                        return <p key={index}>TYPE {index + 1}/{type.toUpperCase()}</p>
                    })}
                </div>
                <div>
                    <p>Add to party?</p>
                    <p>A = Yes</p>
                    <p>B = Go back</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo