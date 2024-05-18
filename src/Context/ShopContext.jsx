import React, { createContext, useState } from "react";
import data from "../Components/Assets/data";
import { CartItems } from '../Components/CartItems/CartItems';
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext({
    data: [],
    cartItems: {},
    getTotalCartAmount: () => 0
});

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const getTotalCartAmount = () => {
        let total = 0;
        Object.keys(cartItems).forEach(key => {
            const product = all_product.find(p => p.id === key);
            if (product) {
                total += product.price * cartItems[key];
            }
        });
        return total;
    };

    const contextValue = {
        data: all_product,
        cartItems,
        getTotalCartAmount
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
