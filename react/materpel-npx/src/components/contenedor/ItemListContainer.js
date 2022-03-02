import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({productos, historia, producción}) => {

    const onAdd = (count) =>{
        console.log(`Se añadio al carrito ${count} productos`)
    }

    return (
        <div className="contenedor">
            <h1>{ productos }</h1>
            <h2>{ historia }</h2>
            <ItemCount stock={8} initial={1} onAdd={onAdd} />
            <h2>{ producción }</h2>
        </div>
    )
}

export default ItemListContainer