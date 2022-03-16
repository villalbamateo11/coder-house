import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <NavLink to='/' className="brand">
        <Logo />
        <div />
      </NavLink>
      <div className="NavBar__menu">
        <div>
          <NavLink to='categoria/ubicacion'><button className='NavBar__button'>Ubicación</button></NavLink>
          <NavLink to='categoria/productos'><button className='NavBar__button'>Productos</button></NavLink>
          <NavLink to='categoria/sobrenosotros'><button className='NavBar__button'>Sobre Nosotros</button></NavLink>
          <NavLink to='categoria/preguntasfrecuentes'><button className='NavBar__button'>Preguntas Frecuentes</button></NavLink>
          
          
          
        </div>
        
      </div>
      <NavLink to="cart">
        <CartWidget />
      </NavLink>
    </div>  
  )
}

export default NavBar