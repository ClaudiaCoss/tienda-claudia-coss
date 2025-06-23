import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', color:'#FFC300'}}>La página no existe.</h1>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/755/755014.png" 
        alt="Página no encontrada" style={{alignItems:'center', display:'block', margin:'0 auto', width:'200px', height:'200px'}}
      />
      <p style={{textAlign:'center', color:'black'}}>Si el problema persiste, por favor contacta al administrador del sitio.</p>
      <div className="d-flex justify-content-center">
  <Link to='/' className='btn btn-dark'>Volver al inicio</Link>
</div>
      
      
    </div>
  )
}

export default ErrorPage
