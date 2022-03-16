import React from 'react'
import './Detail.css';

function Detail({ details }) {
  return (
    <div key={ details.id } className="cards">
        <div className="cards__header">
            <img src={ details.pictureURL } alt='' className="cards__image"></img>
        </div>
        <div className="cards__body">
            <p className="cards__title">{ details.title }</p>
            <p className="cards__description">{ details.description }</p>
            <p className="cards__price">Precio: ${ details.price }</p>
        </div> 
        <div className="cards__footer">
            <p className="cards__stock">En stock:{ details.stock }</p>
        </div>   
    </div>
  )
}