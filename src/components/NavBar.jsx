import '../css/navbar.css';
import CarWidget from './CartWidget';

const NavBar =() =>{
    return(
        <nav className="nav-container">
            <a className="nav-list" href="">Dulces Mexicanos</a>
            <a className="nav-list" href="#">Productos</a>
            <a className="nav-list" href="#">Nosotros</a>
            <a className="nav-list" href="#">Contacto</a>

            <CarWidget/>
        </nav>
    )
}

export default NavBar