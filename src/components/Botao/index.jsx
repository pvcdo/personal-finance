function Botao(props) {
    const {name,color} = props
    return(
        <button style={
            {
                backgroundColor: color,
                border: 'none',
                margin: '10px',
                padding: '15px 32px'
            }
        }>
            {name}
        </button>
    )
}

export default Botao;
