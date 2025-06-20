const TypeBadge = ({ type }) => {
    return (
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
    )
}

export default TypeBadge