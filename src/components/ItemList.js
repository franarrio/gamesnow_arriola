import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div>
            <ul>
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
