import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from "firebase/firestore"
import { database } from "../service/firebase"

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null)
  const [cartQuantity, setCartQuantity] = useState(0)
  const { id } = useParams()
  const [cargando, setCargando] = useState(false)
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    setCargando(true)
    const productCollection = collection(database, "items")
    const docRef = doc(productCollection, id)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({ id: res.id, ...res.data() })
          setInvalid(false)
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => {
        console.log(error)
        setInvalid(true)
      })
      .finally(() => setCargando(false))
  }, [id])

  if (invalid) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#b10788', margin: '2rem' }}>Producto no encontrado.</h1>
        <img 
        src="https://cdni.iconscout.com/illustration/premium/thumb/lo-siento-articulo-no-encontrado-3328225-2809510.png?f=webp" 
        alt="Producto no encontrado" style={{alignItems:'center', display:'block', margin:'0 auto', width:'40%', height:'40%'}}
      />
        <Link to='/' className='btn btn-dark'>Volver al inicio</Link>
      </div>
    )
  }

  if (cargando || detail === null) {
    return <LoaderComponent />
  }

  return (
    <ItemDetail detail={detail} setCartQuantity={setCartQuantity} />
  )
}

export default ItemDetailContainer