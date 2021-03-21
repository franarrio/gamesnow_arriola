import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="container mt-5">
            <ul className="p-0">
                {items.map((item) => {
                    return (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ItemList;
