import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    return (
        <NavLink className="card item-card shadow mb-4" to={`/item/${item.id}`}>
            <img src={item.pictureUrl} className="card-img-top img-thumbnail" alt={item.id} />
            <div className="card-body">
                <h6 className="card-title fw-bold">{item.title}</h6>
                <div>
                    <span className="badge bg-warning text-dark">Id: {item.id}</span>
                    <span className="badge bg-dark m-1 price float-end fs-6">${item.price}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default Item;
