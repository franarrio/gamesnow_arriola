import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    return (
        <div className="card item-card shadow mb-4">
            <img src={item.pictureUrl} className="card-img-top img-thumbnail" alt={item.id} />
            <div className="card-body">
                <h6 className="card-title font-monospace fw-bold">{item.title}</h6>
                <div>
                    <span className="badge bg-warning text-dark">Id: {item.id}</span>
                    <span className="badge bg-dark m-1 price">Price: ${item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
