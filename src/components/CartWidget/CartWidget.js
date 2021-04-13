import React, { useContext } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <button className="btn fs-3 text-warning">
            <RiShoppingCart2Line />
            <span className="badge bg-secondary fs-6 rounded-circle">{cart.length}</span>
        </button>
    );
};

export default CartWidget;
