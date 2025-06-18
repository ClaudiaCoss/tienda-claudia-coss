import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'
import NavBarBoots from './components/NavBarBoots.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
function App() {


  return (
    <BrowserRouter>
      <NavBarBoots />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Dulces Mexicanos para toda ocasión' />} />
        <Route path='/item' element={<ItemListContainer/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      {/* <ItemCount stock={200} /> */}


    </BrowserRouter>
  )
}

export default App
