import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import NavBarBoots from './components/NavBarBoots.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import ContacPage from './components/ContacPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarBoots />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='Dulces Mexicanos para toda ocasión'  />}/>
          <Route path='/productos/' element={<ItemListContainer saludo='Todos los productos' />} />
          <Route path='/productos/:id' element={<ItemDetailContainer />} />
          <Route path='/nosotros/' element={<ItemListContainer saludo='¿Quiénes somos?' />} />
          <Route path='/contacto/' element={<ContacPage saludo='Contáctanos' />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App