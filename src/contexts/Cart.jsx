import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cart";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, disPatchCartAction] = useReducer(cartReducer, [])

    return(
        <CartContext.Provider value={{cart,disPatchCartAction}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;