import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext"
import './Cart.css';

function Cart() {
  const { cartList, clear, deleItemCart, totalPrice } = useCartContext()

  return (
    <div>
      {cartList.length === 0 ? (
    <div>
      <h1>Carrito Vacio</h1>
      <Link to="/">
        <button className='cart__button'> Comprá Ahora </button>
      </Link>
    </div>
  ) : (
    <>
      { cartList.map(prod => <li key={prod.id}>
        <div className="cart">
          <div>
            <img src={prod.pictureURL} alt="" className="cart__img"/>
          </div>
          <div className="cart__datos">
            <p>{prod.title}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio: ${prod.cantidad * prod.price}</p>
          </div>
          <div className="d-flex align-items-center">
            <button onClick={() => deleItemCart(prod.id)} variant="outline-secondary" className="trashButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </div>
        </div>
        </li>) 
      }
      <div>
        Precio total: ${totalPrice()}
      </div>
      <div>
        <button className='cart__button'>Terminar mi compra</button>
      </div>
      <div>
          <button onClick={clear} className='cart__button'>Vaciar carrito</button>
      </div>
    </>
  )}
    </div>
  )
}

export default Cart