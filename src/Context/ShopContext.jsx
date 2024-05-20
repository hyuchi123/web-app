import React, { createContext, useState, useEffect } from "react";
import data from "../Components/Assets/data";
import { CartItems } from '../Components/CartItems/CartItems';


export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
    }, []);

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
