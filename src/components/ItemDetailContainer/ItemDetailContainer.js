import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemMock = {
    title: 'Dragon Ball Super - Part Seven',
    price: 22.5,
    pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mlDhZ9OjL._SY445_.jpg',
    description: `The long awaited continuation of one of the world's most beloved action anime, 18 years in the making. 
    Dragon Ball Super Part 7 features new storylines and characters not seen in previous television or film installments.`
};
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const getItems = async () => {
        const promise = new Promise((resolve) => setTimeout(() => resolve(ItemMock), 2000));

        setItem(await promise);
    };

    useEffect(() => getItems(), []);

    return (
        <div className="container pb-5">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
