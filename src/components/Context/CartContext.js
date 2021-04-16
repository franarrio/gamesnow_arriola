import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!item) return;

        const line = isInCart(item.id);

        if (line && quantity + line.quantity < line.item.stock) {
            var newCart = cart.filter((x) => x.item.id === line.item.id);

            setCart([...newCart, { item: item, quantity: line.quantity + quantity }]);
        } else if (!line) {
            setCart([...cart, { item: item, quantity: quantity }]);
        }
    };

    const removeItem = (itemId) => {
        if (!itemId) return;

        setCart(cart.filter((x) => x.item.id != itemId));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => cart.find((x) => x.item.id === id);

    const getTotal = () => {
        return cart.reduce((total, line) => {
            return (total += line.item.price);
        }, 0);
    };

    const getSize = () => {
        return cart.reduce((size, line) => {
            return (size += line.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getTotal, getSize }}>
            {children}
        </CartContext.Provider>
    );
};
