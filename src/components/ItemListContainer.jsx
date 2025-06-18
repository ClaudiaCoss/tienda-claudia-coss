import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getProductos()
            .then((respuesta) => setData(respuesta))
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            <h1>{props.saludo}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer