import '../css/navbar.css'
import CarWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar =() =>{
    return(
        <nav className="nav-container">
            <NavLink className="nav-link" href="/">Dulces Mexicanos</NavLink>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            <NavLink className="nav-link" href="/nosotros">Nosotros</NavLink>
            <NavLink className="nav-link" href="/category">Categorías</NavLink>
            <NavLink className="nav-link" href="/category/DulcesMexicanos">Dulces Mexicanos</NavLink>
            <NavLink className="nav-link" href="/category/DulcesNavidenios">Dulces Navideños</NavLink>
            <NavLink className="nav-link" href="/contacto">Contacto</NavLink>

            <CarWidget/>
        </nav>
    )
}

export default NavBar