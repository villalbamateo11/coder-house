import { useState } from 'react'
import './ItemCount.css';
import { Link } from "react-router-dom";

const InputCount= ()=> {

    return (
        <Link to='/cart' >
            <button className="button">Ir al carrito</button>
        </Link>
    )
  }


function ItemCount({ count, stock, initial, sumar, restar, onAdd}) {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
      setInputType('input')
    }

    const agregarCarrito = ()=>{
        onAdd(count)
        handleInter(handleInter)
    }

    return (
    <div>
        <div>
            <button disabled={count===initial} onClick={ restar } className="restar">-</button>
            <label className="count" >{ count }</label>
            <button disabled={count===stock} onClick={ sumar } className="sumar">+</button>
        </div>
        {
                inputType === 'button' ? 
                    <button onClick={agregarCarrito} className="button">Agregar al carrito</button>
                : 
                    <InputCount />
               }
    </div>

  )
}

export default ItemCount