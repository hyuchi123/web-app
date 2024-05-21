import React, { createContext, useState, useEffect } from "react";
// import data from "../Components/Assets/data";
// import { CartItems } from '../Components/CartItems/CartItems';


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
    const [cartItems, setCartItems] = useState({getDefaultCart});

    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
        
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response) => response.json()).then((data) => setCartItems(data));
        }
    }, []);

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

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({itemId:itemId}),
            })
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                console.log(text);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({itemId:itemId}),
            })
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                console.log(text);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
        }
    };

    const contextValue = {
        data: all_product,
        cartItems,
        getTotalCartAmount,
        getTotalCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
