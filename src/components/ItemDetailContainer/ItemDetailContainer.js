import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemsMock = [
    // Anime & Videos
    {
        id: 8568,
        title: 'Dragon Ball Super - Part Seven',
        price: 22.5,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81mlDhZ9OjL._SY445_.jpg',
        category: 1
    },
    {
        id: 6252,
        title: 'Naruto - Shippuden Movie Pentalogy [Blu-ray]',
        price: 32.5,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/814iq8yWRTL._AC_SX342_.jpg',
        category: 1
    },
    {
        id: 7026,
        title: 'Bleach The Movie: Memories of Nobody by Johnny Yong Bosch',
        price: 50,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/619JfJhpHUL._AC_SY445_.jpg',
        category: 1
    },
    // Manga & Books
    {
        id: 5086,
        title: 'Berserk, Vol. 1',
        price: 15,
        description: 'Product description',
        pictureUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51UtAAqHDLL._SX352_BO1,204,203,200_.jpg',
        category: 2
    },
    {
        id: 9132,
        title: 'Jujutsu Kaisen, Vol. 1',
        price: 10,
        description: 'Product description',
        pictureUrl:
            'https://images-na.ssl-images-amazon.com/images/I/51CcaF9O78L._SX331_BO1,204,203,200_.jpg',
        category: 2
    },
    {
        id: 9916,
        title: 'Demon Slayer: Kimetsu no Yaiba, Vol. 1',
        price: 8.99,
        description: 'Product description',
        pictureUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61RLgk2k-1L._SX331_BO1,204,203,200_.jpg',
        category: 2
    },
    // Figures
    {
        id: 5882,
        title: 'Dragon Ball Super Evolve 5" Action Figure - Goku Ultra Instinct Silver',
        price: 9.99,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71bcZVEOwqL._AC_SL1500_.jpg',
        category: 3
    },
    {
        id: 8015,
        title: 'Anime Heroes Naruto Namikaze Minato Action Figure',
        price: 20.09,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71pGmowjCcL._AC_SL1500_.jpg',
        category: 3
    },
    {
        id: 3089,
        title: 'WWE Ricky The Dragon Steamboat Fan Takeover 6 in Elite Action Figure',
        price: 19.99,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71G9Nw4mOdL._AC_SL1500_.jpg',
        category: 3
    },
    // Games
    {
        id: 5663,
        title: 'FIFA 21 – Xbox One & Xbox Series X',
        price: 59.01,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81F2IPqpljL._SL1500_.jpg',
        category: 4
    },
    {
        id: 6698,
        title: 'Assassin’s Creed Valhalla Xbox Series X|S, Xbox One Standard Edition',
        price: 36.13,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81orgjaBc%2BL._SL1500_.jpg',
        category: 4
    },
    {
        id: 4131,
        title: 'Mass Effect Legendary Edition - Xbox One',
        price: 59.88,
        description: 'Product description',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71x1I9OWqRL._SL1170_.jpg',
        category: 4
    }
];
const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const { itemId } = useParams();
    const getItems = async () => {
        const promise = new Promise((resolve) => setTimeout(() => resolve(ItemsMock), 2000));

        setItems(await promise);
    };

    useEffect(() => getItems(), []);

    return (
        <div className="container pb-5">
            <ItemDetail item={itemId ? items.find((item) => item.id === parseInt(itemId)) : {}} />
        </div>
    );
};

export default ItemDetailContainer;
