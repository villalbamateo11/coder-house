import {createContext,useState, useContext} from 'react'

 const CartContext = createContext([]) 

 export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    
    const [cartList, setCartList] = useState([])

    const IsInCart = (id) => {
        return cartList.some( (prod) =>prod.id === id )
    }

    const addItem = (prod) => {
        setCartList( [ ...cartList, prod ] )
    }

    const clear=()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            IsInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider