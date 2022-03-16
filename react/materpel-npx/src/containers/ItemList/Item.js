import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ items }) {
  return (
    <div className="cards">
        <div className="cards__header">
            <img src={ items.pictureURL } alt='' className="cards__image"></img>
        </div>
        <div className="cards__body">
            <p className="cards__title">{ items.title }</p>
            <p className="cards__price">Precio: ${ items.price }</p>
        </div> 
        <div className="cards__footer">
          <Link to={`detalle/${items.id}`}>
            <button className="cards__button" >Detalles</button>
          </Link>
        </div>   
    </div>
  )
}

export default Item