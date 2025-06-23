import React, { useEffect, useState } from 'react'
import { getProductos } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getProductos()
      .then((productos) => {
        const producto = productos.find((item) => item.id === id)
        setDetail(producto)
      })
      .catch((error) => console.log(error))
  }, [id])

  if (detail === undefined) {
    return <p style={{ color: 'red', textAlign: 'center' }}>Producto no encontrado.</p>
  }

  if (detail === null) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>
  }

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  )
}

export default ItemDetailContainer