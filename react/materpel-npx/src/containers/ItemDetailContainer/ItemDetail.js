import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ prod }) => {
    const [count, setCount] = useState(1)

    const { addItem, cartList } = useCartContext()

    const sumar = ()=> {
        setCount(count+1)
    }

    const restar = ()=> {
        setCount(count-1)
    }

    
    const onAdd = count =>{
      console.log(`Agregaste ${count} productos`)
      addItem({...prod, cantidad: count})
      console.log(cartList)
    }

      return (
        <div className='detalle'>
          <div>
            <img  className='detalle__img' src={prod.image} alt={prod.title}></img>
          </div>
          <div className='detalle__datos'>
            <div>
              <p>{prod.title}</p>
              <p>{prod.description}</p>
              <p>En stock: {prod.stock}</p>
              <p>${prod.price}</p>
            </div>
            <div className='ItemCount'>
                <ItemCount count={count} sumar={sumar} restar={restar} stock={prod.stock} initial={1} onAdd={onAdd}/>
              <Link to='/'>
                <button className='detalle__button'>Volver a productos</button>
              </Link>
            </div>
          </div>
         
        </div>
        
      )
    }

export default ItemDetail