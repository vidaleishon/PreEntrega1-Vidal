import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCart = (departamentos) => {
        setCartList(departamentos)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart
        }}>
        {children}
        </CartContext.Provider>
    
    )
}
