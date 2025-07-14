import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2 style={{ textAlign: 'center', color: '#b10788' }}>Tu carrito está vacío.</h2>
        <img 
        src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" 
        alt="Carrito vacío" style={{alignItems:'center', display:'block', margin:'0 auto', width:'40%', height:'40%'}}
      />
        <h3 style={{ textAlign: 'center' }}>Visita nuestros productos.</h3>
        <div className="d-flex justify-content-center">
        <Link className='btn btn-dark' to='/'>Regresar al Inicio.</Link>
        </div>
    </div>
  )
}

export default EmptyCart
