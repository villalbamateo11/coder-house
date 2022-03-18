import React from 'react'
import './CartWidget.css';
import carrito from '../../imagenes/carrito.png'

function CartWidget() {
  return (
    <div>
        <img src={carrito} alt="carrito" className="icono"></img>
    </div>
  )
}

export default CartWidget