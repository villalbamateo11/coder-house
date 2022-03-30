import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar() {

  const { totalProducts } = useCartContext()

  const valueItemCart = totalProducts();

  return (
    <div className='NavBar'>
      <NavLink to='/' className="brand">
        <Logo />
        <div />
      </NavLink>
      <div className="NavBar__menu">
        <div>
          <NavLink to='category/carton'><button className='NavBarbutton'>Carton</button></NavLink>
          <NavLink to='category/planilla'><button className='NavBarbutton'>Planilla</button></NavLink>
          <NavLink to='category/papel'><button className='NavBarbutton'>Papel</button></NavLink>
        </div>
      </div>
      <div className='cartWidget'>
        <NavLink to="cart">
          <CartWidget />  
        </NavLink>
        {valueItemCart === 0 ? (
          <></>
          ) : (
          <div className='cartProducts'>
            <div className='number'>{totalProducts()}</div>
          </div>
        )}
      </div>
    </div>  
  )
}

export default NavBar