import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    return (
        <div className="card item-card shadow">
            <img src={item.pictureUrl} className="card-img-top img-thumbnail" alt={item.id} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div>
                    <span className="badge bg-dark">ID: {item.id}</span>
                    <span className="badge bg-dark m-1">Price: {item.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
