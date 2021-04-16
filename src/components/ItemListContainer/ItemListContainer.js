import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import { ItemsMock } from '../../ItemMock';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const getItems = async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(ItemsMock), 1000);
        });

        setItems(await promise);
    };

    useEffect(() => getItems(), []);

    return (
        <div className="container">
            <h3 className="">{greeting}</h3>
            <ItemList
                items={categoryId ? items.filter((item) => item.category === parseInt(categoryId)) : items}
            />
        </div>
    );
};

export default ItemListContainer;
