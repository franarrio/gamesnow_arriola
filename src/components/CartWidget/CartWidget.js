import React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';

const CartWidget = () => {
    return (
        <button className="btn fs-3 text-warning">
            <RiShoppingCart2Line />
        </button>
    );
};

export default CartWidget;
