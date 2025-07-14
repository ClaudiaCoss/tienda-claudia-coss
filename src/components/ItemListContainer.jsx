import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs } from "firebase/firestore"
import { database } from "../service/firebase"

const ItemListContainer = (props) => {
    const { categoriasId } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productCollection = collection(database, "items")
        getDocs(productCollection)
            .then((res) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                // Solo filtra si hay categoriasId
                if (categoriasId) {
                    setData(list.filter((prod) => prod.categoria === categoriasId))
                } else {
                    setData(list) // En el home y en /productos muestra todos
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoriasId])

    return (
        <>
            {loading
                ? <LoaderComponent />
                : <div>
                    <h1 style={{ textAlign: 'center', color: '#f57109', margin: '2rem' }}>{props.saludo}</h1>
                    <ItemList data={data} />
                </div>
            }
        </>
    )
}

export default ItemListContainer