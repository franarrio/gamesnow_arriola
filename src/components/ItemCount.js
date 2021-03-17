import React, { useState, useEffect } from 'react';
import { RiAddCircleFill, RiIndeterminateCircleFill } from 'react-icons/ri';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial < stock ? initial : 0);

    useEffect(() => {
        onAdd(count);
    });

    return (
        <div className="item-count">
            <div className="input-group mb-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={(e) => count > 0 && setCount(count - 1)}
                >
                    <RiIndeterminateCircleFill />
                </button>
                <input
                    type="quntity"
                    className="form-control text-center"
                    value={count}
                    onChange={() => {}}
                />

                <button
                    className="btn btn-outline-secondary"
                    onClick={(e) => count < stock && setCount(count + 1)}
                >
                    <RiAddCircleFill />
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
