import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import NavBarBoots from './components/NavBarBoots.jsx';
function App() {


  return (
    <>
      <NavBarBoots/>
      <ItemListContainer saludo='Bienvenidos a mi tienda' />
    </>
  )
}

export default App
