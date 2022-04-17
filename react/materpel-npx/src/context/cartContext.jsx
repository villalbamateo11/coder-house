import {createContext,useState, useContext} from 'react'

 const CartContext = createContext([]) 

 export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

    const addItem = (prod) => {

        const index = cartList.findIndex((i) => i.id === prod.id);

        if (index > -1) {
          const oldCartList = cartList[index].cantidad;

          cartList.splice(index, 1);

          setCartList([
            ...cartList,
            { ...prod, cantidad: prod.cantidad + oldCartList },
          ]);
        } else {
          setCartList( [ ...cartList, prod ] )
        }
    }

      function deleItemCart(id) {
        setCartList(cartList.filter((prod) => prod.id !== id));
      }

      const totalPrice = () => {
        const totalCarrito = cartList.reduce(
          (prev, acty) => prev + acty.price * acty.cantidad,
          0
        );
        return totalCarrito;
      };

      const totalProducts = () => {
        const totalCarrito = cartList.reduce(
          (prev, acty) => prev + acty.cantidad,
          0
        );
        return totalCarrito;
      };

    const clear=()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            deleItemCart,
            clear,
            totalPrice,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider