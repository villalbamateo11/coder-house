import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <div>Materpel </div>
      <div className="NavBarmenu">
        <div>
          <button className='NavBarbutton'>Menú</button>
          <button className='NavBarbutton'>Productos</button>
          <button className='NavBarbutton'>Sobre Nosotros</button>
          <button className='NavBar__button'>Preguntas Frecuentes</button>
        </div>

      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar