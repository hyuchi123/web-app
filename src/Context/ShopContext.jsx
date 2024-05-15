import React, { createContext, useState } from "react";
import data from "../Components/Assets/data";
import { CartItems } from '../Components/CartItems/CartItems';

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
            const product = data.find(p => p.id === key);
            if (product) {
                total += product.new_price * cartItems[key];
            }
        });
        return total;
    };

    const contextValue = {
        data,
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
