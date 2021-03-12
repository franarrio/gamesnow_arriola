import React from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';

const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-lg link-secondary">
                <RiShoppingCart2Line />
            </button>
        </div>
    );
};

export default CartWidget;
