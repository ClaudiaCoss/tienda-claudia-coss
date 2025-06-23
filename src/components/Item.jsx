import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({ prod }) => {
    const {name, price, img, description, id} = prod
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className="card-title" style={{ textAlign: 'center', color:'#5e0aa9' }}>{name}</h2>
                <p className="card-text" style={{ textAlign: 'center' }}>${price}.00 MXN</p>
            </div>    
                <div className="d-flex justify-content-center">
                <Link to={'/productos/'+id} className="btn btn-outline-info" style={{ textAlign: 'center' }}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Item