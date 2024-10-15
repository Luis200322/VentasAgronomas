import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-container"> {/* Clase para el contenedor del header */}
      <h1 className="header-title">Mi Tienda Online</h1> {/* Clase para el título */}
      <nav className="header-nav"> {/* Clase para el elemento nav */}
        <Link to="/" className="header-link">Inicio</Link> {/* Clase para los enlaces */}
        <Link to="/products" className="header-link">Productos</Link>
        <Link to="/cart" className="header-link">Carrito</Link>
      </nav>
    </header>
  );
}

export default Header;
