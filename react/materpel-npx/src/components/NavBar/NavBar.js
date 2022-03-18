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
          <NavLink to='categoria/carton'><button className='NavBarbutton'>Carton</button></NavLink>
          <NavLink to='categoria/planilla'><button className='NavBarbutton'>Planilla</button></NavLink>
          <NavLink to='categoria/papel'><button className='NavBarbutton'>Papel</button></NavLink>
        </div>
        
      </div>
      <NavLink to="cart">
        <CartWidget />
      </NavLink>
    </div>  
  )
}

export default NavBar