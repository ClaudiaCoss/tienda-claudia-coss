import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const LoaderComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Spinner animation="border" variant="info"/>
      <h2 style={{ color: '#5e0aa9', marginLeft: '20px' }}>Cargando...</h2>
    </div>
  )
}

export default LoaderComponent
