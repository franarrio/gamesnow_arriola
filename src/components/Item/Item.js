import React from 'react';
import '../Item/Item.css';

const Item = ({ item }) => {
    return (
        <div className="card item-card shadow mb-4">
            <img src={item.pictureUrl} className="card-img-top img-thumbnail" alt={item.id} />
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <div>
                    <span className="badge bg-warning text-dark">SKU: {item.id}</span>
                    <span className="badge bg-dark m-1">Price: $ {item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
