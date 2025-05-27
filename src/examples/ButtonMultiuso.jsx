const ButtonMultiuso = ({texto, handler, cssStyle, styles}) => {
    //const{texto}=props
    return(
        <div>
            <h1>Botón Multiuso</h1>
        <button className={cssStyle} style={styles} onClick={handler}>{texto}</button>
        </div>
    )
}

export default ButtonMultiuso