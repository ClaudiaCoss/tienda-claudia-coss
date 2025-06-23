import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ detail }) => {

    const onAdd = (cantidad)=>{
        alert(`Agregaste ${cantidad} unidades al carrito`)
    }

    return (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ textAlign: 'center', color: '#b10788' }}>Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} style={{ display: 'block', margin: '0 auto', width: '300px', height: '200px' }} />
            <h3 style={{ textAlign: 'center', color: '#C70039', margin:'2rem' }}>Descripción: {detail.description}</h3>
            <p style={{ textAlign: 'center' }}>Precio: ${detail.price}</p>
            <p style={{ textAlign: 'center'}}>Stock: {detail.stock}</p>
            {/* <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                <Link to='/productos' className='btn btn-dark'>Volver</Link>
            </div> */}
            <div className="d-flex justify-content-center" style={{ width: '100%' }}>
            <ItemCount stock ={detail.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail
