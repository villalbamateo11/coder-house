import React from 'react'
import './Logo.css';
import capueat from '../../imagenes/logo2.png'

function Logo() {
  return (
    <div>
      <img src={capueat} alt="logo" className="logo" />
    </div>
  )
}

export default Logo