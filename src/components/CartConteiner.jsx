import React, { useContext } from 'react'
import EmptyCart from './EmptyCart'
import CartView from './CartView'
import { CartContext } from '../context/CartContext.jsx'

const CartConteiner = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext)

    return (
        <>
            {
                !cart.length ? (
                    <EmptyCart />
                ) : (
                    <CartView />
                )
            }
        </>
    )
}

export default CartConteiner