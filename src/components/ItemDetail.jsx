import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext.jsx'

const ItemDetail = ({ detail }) => {
    const [purchase, setPurchase] = useState(false)
    const { addItem } = useContext(CartContext)

    // Evita renderizar si detail no tiene datos
    if (!detail) return null

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setPurchase(true)
    }

    return (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ textAlign: 'center', color: '#b10788' }}>Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} style={{ display: 'block', margin: '0 auto', width: '300px', height: '200px' }} />
            <h3 style={{ textAlign: 'center', color: '#C70039', margin: '2rem' }}>Descripción: {detail.description}</h3>
            <p style={{ textAlign: 'center' }}>Precio: ${detail.price}</p>
            <p style={{ textAlign: 'center' }}>Stock: {detail.stock}</p>
            <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                {purchase
                    ? <Link className='btn btn-dark' to='/productos'>Volver a productos</Link>
                    : <ItemCount stock={detail.stock} onAdd={onAdd} />}
            </div>
        </div>
    )
}

export default ItemDetail