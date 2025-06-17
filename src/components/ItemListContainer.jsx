import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncMock";


const ItemListContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getProductos()
            .then((respuesta) => setData(respuesta))
            .catch((error) => console.log(error))
    }, [])

    console.log(data)

    return (
        <div>
            <h1>{props.saludo}</h1>
        </div>
    )
}

export default ItemListContainer