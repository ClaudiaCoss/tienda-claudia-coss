import React, { useEffect, useState } from 'react'

const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)
    const [compra, setCompra] = useState(false)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const comprarItem = () => {
        setCompra(!compra)
    }

    useEffect(() =>
        console.log('Componente ItemCount montado'), [])

    console.log('ItemCount')

    return (
        <div>
            <div>
                <button className='btn btn-danger' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary' onClick={comprarItem} disabled={stock === 0}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
