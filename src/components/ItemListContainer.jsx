import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductos } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const { categoriasId } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        getProductos()
            .then((respuesta) => {
                if (categoriasId) {
                    setData(respuesta.filter((prod) => prod.categorias === categoriasId));
                } else {
                    setData(respuesta);
                }
            })
            .catch((error) => console.log(error))
    }, [categoriasId])

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#f57109', margin:'2rem' }}>{props.saludo}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer