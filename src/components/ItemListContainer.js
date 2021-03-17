import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const Items = [
    {
        id: 1,
        title: 'Dragon Ball Super - DVD Box Vol.8 - Episoden 113-131 [2015]',
        price: 22.5,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/811OCmYmTbL._AC_SY445_.jpg'
    },
    {
        id: 2,
        title: 'Naruto - Shippuden Movie Pentalogy [Blu-ray]',
        price: 32.5,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/814iq8yWRTL._AC_SX342_.jpg'
    },
    {
        id: 3,
        title: 'Bleach The Movie: Memories of Nobody by Johnny Yong Bosch',
        price: 50,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/619JfJhpHUL._AC_SY445_.jpg'
    }
];
const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Items);
        }, 2000);
    });
    const onAdd = (count) => {
        console.log('count', count);
        console.log('onAdd ItemListContainer');
    };

    promise.then(
        (items) => {
            setItems(items);
        },
        (error) => {
            console.log(error);
        }
    );

    return (
        <div className="container">
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
