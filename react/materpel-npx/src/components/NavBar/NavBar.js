import React from 'react'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <div className='Titulo'>Materpel</div>
      <div>
        <button className='NavBarbutton'>Menú</button>
        <button className='NavBarbutton'>Productos</button>
        <button className='NavBarbutton'>Sobre Nosotros</button>
        <button className='NavBarbutton'>Carrito</button>
      </div>
    </div>
  )
}

export default NavBar
