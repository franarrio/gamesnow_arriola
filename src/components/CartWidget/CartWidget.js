import React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';

const CartWidget = () => {
    return (
        <button className="btn btn-lg link-secondary bg-warning text-body">
            <RiShoppingCart2Line />
        </button>
    );
};

export default CartWidget;
