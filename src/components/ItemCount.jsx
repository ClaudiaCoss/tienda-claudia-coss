import React, { useEffect, useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const comprarItem = () => {
        onAdd(count)
    }

    return (
        <div>
            <div style={{ margin:'1rem', textAlign:'center' }}>
                <button className='btn btn-dark' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-dark' onClick={sumar}>+</button>
            </div>
            <div>
            <button className='btn btn-dark' onClick={comprarItem} disabled={stock === 0}>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount