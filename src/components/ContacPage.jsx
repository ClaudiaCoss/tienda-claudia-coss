import React from 'react'

const ContacPage = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#f57109', margin: '2rem' }}>{props.saludo}</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="inputName" placeholder="Ingrese su nombre completo" />
        </div>
        <div className="col-12">
          <label htmlFor="inputDetail" className="form-label">Detalle de dudas o sugerencias:</label>
          <input type="text" className="form-control" id="inputDetail" placeholder="Detalle de dudas o sugerencias" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select">
            <option defaultValue>Selecciona una opción...</option>
            <option>Ciudad de México</option>
            <option>Estado de México</option>
            <option>Puebla</option>
            <option>Monterrey</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-dark">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ContacPage