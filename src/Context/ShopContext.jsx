import React, { createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";
//import { CartItems } from '../Components/CartItems/CartItems'

export const ShopContext = createContext({
    all_product: [],
    cartItems: {},
    getTotalCartAmount: () => 0
});

const ShopContextProvider = ({children}) => {

    // 額外加的
    const [cartItems, setCartItems] = useState({});

    const getTotalCartAmount = () => {
        let total = 0;
        Object.keys(cartItems).forEach(key => {
            const product = all_product.find(p => p.id === key);
            if (product) {
                total += product.new_price * cartItems[key];
            }
        });
        return total;
    };
    //

    const contextValue = {
        all_product,
        cartItems,
        getTotalCartAmount
    };

    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
