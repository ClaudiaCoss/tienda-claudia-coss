import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

const CartView = () => {
  const { cart, removeItem, clearCart, cartTotal } = useContext(CartContext)

  return (
    <div>
      <h2>Carrito:</h2>
      <div>
        {
          cart.map((compra) => (
            <div key={compra.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <img src={compra.img} alt={compra.name} style={{ width: '100px', height: '100px' }} />
              <h3>{compra.name}</h3>
              <p>Precio: ${compra.price}.00 MXN</p>
              <p>Cantidad: {compra.quantity}</p>
              <p>Total: ${cartTotal()}.00 MXN</p>
              <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>
            </div>
          ))
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button className='btn btn-danger' onClick={clearCart}>Vaciar Carrito</button>
        <h3>Total: ${cartTotal()}.00 MXN</h3>
        <Link className='btn btn-success' to='/checkout'>Finalizar Compra</Link>
        
        <Link className='btn btn-dark' to='/'>Volver al Inicio</Link>
      </div>
    </div>
  )
}

export default CartView
