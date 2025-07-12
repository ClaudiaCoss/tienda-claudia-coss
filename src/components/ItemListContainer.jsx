import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductos } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = (props) => {
    const { categoriasId } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true) // <--- define loading

    useEffect(() => {
        setLoading(true)
        getProductos()
            .then((respuesta) => {
                if (categoriasId) {
                    setData(respuesta.filter((prod) => prod.categoria === categoriasId));
                } else {
                    setData(respuesta);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [categoriasId])

    return (
        <>
        {
            loading 
            ? <LoaderComponent/>
            : <div>
                <h1 style={{ textAlign: 'center', color: '#f57109', margin:'2rem' }}>{props.saludo}</h1>
                <ItemList data={data}/>
            </div>
        }
        </>
    )
}

export default ItemListContainer