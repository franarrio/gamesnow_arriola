import React from 'react';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div>
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
