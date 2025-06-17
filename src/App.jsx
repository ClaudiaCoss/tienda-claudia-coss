import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'
import NavBarBoots from './components/NavBarBoots.jsx'
function App() {


  return (
    <>
      <NavBarBoots/>
      <ItemListContainer saludo='Dulces Mexicanos para toda ocasión' />
      <ItemCount/>
    </>
  )
}

export default App
