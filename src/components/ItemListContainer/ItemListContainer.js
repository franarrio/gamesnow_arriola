import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemListContainer/ItemList/ItemList';

const ItemsMock = [
    {
        id: 8568,
        title: 'Dragon Ball Super - Part Seven',
        price: 22.5,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mlDhZ9OjL._SY445_.jpg'
    },
    {
        id: 6252,
        title: 'Naruto - Shippuden Movie Pentalogy [Blu-ray]',
        price: 32.5,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/814iq8yWRTL._AC_SX342_.jpg'
    },
    {
        id: 7026,
        title: 'Bleach The Movie: Memories of Nobody by Johnny Yong Bosch',
        price: 50,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/619JfJhpHUL._AC_SY445_.jpg'
    }
];
const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const onAdd = (count) => {
        console.log('count', count);
        console.log('onAdd ItemListContainer');
    };
    const getItems = async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(ItemsMock), 2000);
        });

        setItems(await promise);
    };

    useEffect(() => getItems(), []);

    return (
        <div className="container">
            <h3 className="font-monospace">{greeting}</h3>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
