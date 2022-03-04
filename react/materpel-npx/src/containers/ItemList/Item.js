import React from 'react'
import './Item.css';

function Item({ items }) {
  return (
    <div key={ items.id } className="cards">
        <div className="cards__header">
            <img src={ items.img } alt='' className="cards__image"></img>
        </div>
        <div className="cards__body">
            <p className="cards__title">{ items.title }</p>
            <p className="cards__description">{ items.description }</p>
            <p className="cards__price">Precio: ${ items.price }</p>
        </div> 
        <div className="cards__footer">
            <p className="cards__stock">En stock:{ items.stock }</p>
        </div>   
    </div>
  )
}

export default Item