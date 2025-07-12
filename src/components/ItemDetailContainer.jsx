import React, { useEffect, useState } from 'react'
import { getProductos } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null)
  const [cartQuantity, setCartQuantity] = useState(0)
  const { id } = useParams()
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
  
  setCargando(true)
    getProductos()
      .then((productos) => {
        const producto = productos.find((item) => item.id === id)
        setDetail(producto)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setCargando(false)
      })
  }, [id])

  if (detail === undefined) {
    return <p style={{ color: 'red', textAlign: 'center' }}>Producto no encontrado.</p>
  }

  if (detail === null) {
    
  }

  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detail={detail} setCartQuantity={setCartQuantity} />}
      
    </>
  )
}

export default ItemDetailContainer