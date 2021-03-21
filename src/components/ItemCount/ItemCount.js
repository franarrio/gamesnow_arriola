import React, { useState } from 'react';
import { RiAddCircleFill, RiIndeterminateCircleFill } from 'react-icons/ri';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial < stock ? initial : 0);

    return (
        <div className="item-count mt-5">
            <div className="input-group mb-3">
                <span className="btn btn-outline-secondary" onClick={(e) => count > 0 && setCount(count - 1)}>
                    <RiIndeterminateCircleFill />
                </span>
                <input
                    type="quntity"
                    className="form-control text-center"
                    value={count}
                    onChange={() => {}}
                />

                <span
                    className="btn btn-outline-secondary"
                    onClick={(e) => count < stock && setCount(count + 1)}
                >
                    <RiAddCircleFill />
                </span>
            </div>
        </div>
    );
};

export default ItemCount;
