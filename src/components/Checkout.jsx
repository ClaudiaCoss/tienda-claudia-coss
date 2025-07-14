import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { database } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [orderId, setOrderId] = useState('')
    const { cart, cartTotal, clearCart } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        const order = {
            comprador: buyer,
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(database, 'ventas')
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clearCart()
                
            })
            .catch((error) => {
                console.error("Error al finalizar la compra: ", error)
            })
    }

    return (
        <div>
            {orderId ? (
                <div>
                    <h1 style={{ textAlign: 'center', color: '#b10788', margin: '2rem' }}>¡Gracias por tu compra! Tu número de orden es: {orderId}</h1>
                    <img 
                        src="https://images.vexels.com/media/users/3/201154/isolated/preview/8716c7ce40b940138817e13f137d130b-icono-de-entrega-de-compras.png" 
                        alt="Página no encontrada" style={{alignItems:'center', display:'block', margin:'0 auto', width:'500px', height:'500px'}}
                    />
                </div>
            ) : (
                <>
                    <div className="text">
                        <h1 style={{ textAlign: 'center', color: '#f57109', margin: '2rem' }}>Por favor, completa el formulario para finalizar tu compra.</h1>
                    </div>
                    
                    <form className="row g-3" onSubmit={finalizarCompra}>
                        <div className="col-md-4">
                            <label htmlFor="inputName" className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" id="inputName" name="nombre" placeholder="Ingrese su nombre completo" onChange={buyerData} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputEmail4" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Ingrese su correo electrónico" onChange={buyerData} required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputPhone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="inputPhone" name="telefono" placeholder="Ingresa tu teléfono" onChange={buyerData} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label placeholder-lg">Dirección completa</label>
                            <input type="text" className="form-control" id="inputCity" name="direccion" onChange={buyerData} required />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type='submit' className='btn btn-dark'>Enviar</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}

export default Checkout