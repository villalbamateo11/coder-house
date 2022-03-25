import { useCartContext } from "../../context/cartContext"
import './Cart.css';


function Cart() {
  const { cartList, clear } = useCartContext()

  return (
    <div>
      { cartList.map(prod => <li key={prod.id}>
        <div className="cart">
          <div>
            <img src={prod.pictureURL} alt="" className="cart__img"/>
          </div>
          <div className="cart__datos">
            <p><li>{prod.title}</li></p>
            <p><li>Cantidad: {prod.cantidad}</li></p>
            <p><li>Precio: ${prod.cantidad * prod.price}</li></p>
          </div>
        </div>
        </li>) 
      }
      <div>
          <button onClick={clear} className='cart__button'>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart