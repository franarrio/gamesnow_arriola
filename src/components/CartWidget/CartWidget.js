import React, { useContext } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    const { cart, getSize } = useContext(CartContext);

    return (
        <Link className="btn fs-3 text-warning" to="/cart">
            <RiShoppingCart2Line />
            <span className="badge bg-secondary fs-6 rounded-circle">{getSize()}</span>
        </Link>
    );
};

export default CartWidget;
