import { useState } from 'react'
import './ItemCount.css';
import { Link } from "react-router-dom";

const InputCount= ()=> {

    return (
        <Link to='/Cart' >
            <button>Ir al carrito</button>
        </Link>
    )
  }
  
  const ButtonCount= ({handleInter})=> {
      return <button onClick={handleInter}>Agregar al carrito</button>
  
  }

function ItemCount({ count, stock, initial, sumar, restar}) {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
      setInputType('input')
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
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
               }
    </div>
    
  )
}

export default ItemCount