import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext"
import './Cart.css';
import { 
  addDoc, 
  collection, 
  getFirestore,
} from "firebase/firestore"
import { useState } from "react";


function Cart() {
  const { cartList, clear, deleItemCart, totalPrice } = useCartContext()

  const [dataForm, setDataForm] = useState({
    email: '', name: '', phone: ''
  })

  const [id, setId] = useState('')

    const generarOrden = async (e)=>{

      e.preventDefault();
      let orden = {}      

      orden.buyer = dataForm
      orden.total = totalPrice();

      orden.items = cartList.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.title;
          const precio = cartItem.price * cartItem.cantidad;
          
          return {id, nombre, precio}   
      })

      const db = getFirestore()
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollectionSet, orden)
      .then(resp => setId(resp.id))
      .catch(err => console.error(err))
      .finally(() => console.log('termino'))
    }

    const handleChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
      })
    }



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
      {id.length !== '' && `el id de la compra es: ${id}`}
      { cartList.map(prod => <li key={prod.id}>
        <div className="cart">
          <div>
            <img src={ prod.image } alt="" className="cart__img"/>
          </div>
          <div className="cart__datos">
            <p>{ prod.title }</p>
            <p>Cantidad: { prod.cantidad }</p>
            <p>Precio: ${ prod.cantidad * prod.price }</p>
          </div>
          <div className="d-flex align-items-center">
            <button onClick={ () => deleItemCart(prod.id) } variant="outline-secondary" className="trashButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
          </div>
        </div>
        </li>) 
      }
      <div>
        Precio total: ${ totalPrice() }
      </div>
      
      <div>
          <button onClick={ clear } className='cart__button'>Vaciar carrito</button>
      </div>
      <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                <div>
                  <button onClick={generarOrden} className='cart__button'>Terminar Compra</button>
                </div>
            </form>

    </>
  )}
    </div>
    
  )
}

export default Cart