import React, { useState } from 'react';
import { RiAddCircleFill, RiIndeterminateCircleFill, RiShoppingCartFill } from 'react-icons/ri';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial < stock ? initial : 0);

    return (
        <div className="item-count mt-4">
            <div className="input-group mb-3">
                <span className="btn" onClick={(e) => count > 0 && setCount(count - 1)}>
                    <RiIndeterminateCircleFill />
                </span>
                <input
                    type="quantity"
                    className="border-0 form-control text-center rounded-3"
                    value={count}
                    onChange={(e) => {}}
                />
                <span className="btn" onClick={(e) => count < stock && setCount(count + 1)}>
                    <RiAddCircleFill />
                </span>
                <button
                    onClick={(e) => {
                        onAdd(count);
                    }}
                    className="btn border-secondary rounded-3"
                >
                    <span className="fw-bold">Add To Cart</span>
                    <RiShoppingCartFill />
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
