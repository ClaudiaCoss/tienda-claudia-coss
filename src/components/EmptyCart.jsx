import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2>Carrito está vacío.</h2>
        <h3>Visita nuestros productos.</h3>
        <Link className='btn btn-dark' to='/'>Regresar al Inicio.</Link>
    </div>
  )
}

export default EmptyCart
