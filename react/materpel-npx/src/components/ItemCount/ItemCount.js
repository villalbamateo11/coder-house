import { useState } from 'react'
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd}) {
  
    const [count, setCount] = useState(initial)

    const sumar = ()=> {
        setCount(count+1)
    }

    const restar = ()=> {
        setCount(count-1)
    }

    return (
    <div>
        <div>
            <button disabled={count===initial} onClick={ restar } className="restar">-</button>
            <label className="count" >{ count }</label>
            <button disabled={count===stock} onClick={ sumar } className="sumar">+</button>
        </div>
        <div>
            <button onClick={ () => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
    
  )
}

export default ItemCount