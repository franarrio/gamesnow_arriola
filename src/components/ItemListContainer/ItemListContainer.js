import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemListContainer/ItemList/ItemList';

const ItemsMock = [
    // Anime & Videos
    {
        id: 8568,
        title: 'Grand Theft Auto V: Premium Online Edition',
        price: 22.5,
        pictureUrl:
            'https://s3.gaming-cdn.com/images/products/4211/271x377/grand-theft-auto-v-premium-online-edition-cover.jpg',
        category: 1
    },
    {
        id: 6252,
        title: 'Red Dead Redemption 2 Standard Edition',
        price: 32.5,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/5679/271x377/red-dead-redemption-2-standard-edition-cover.jpg',
        category: 1
    },
    {
        id: 7026,
        title: 'Resident Evil Village',
        price: 50,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/6329/271x377/resident-evil-village-cover.jpg',
        category: 1
    },
    // Manga & Books
    {
        id: 5086,
        title: 'FIFA 21',
        price: 23.89,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/6890/271x377/fifa-21-cover.jpg',
        category: 2
    },
    {
        id: 9132,
        title: 'Dead by Daylight',
        price: 10,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/1904/271x377/dead-by-daylight-cover.jpg',
        category: 2
    },
    {
        id: 9916,
        title: 'Cyberpunk 2077',
        price: 8.99,
        pictureUrl: 'https://s1.gaming-cdn.com/images/products/840/271x377/cyberpunk-2077-cover.jpg',
        category: 2
    },
    // Figures
    {
        id: 5882,
        title: 'Biomutant',
        price: 9.99,
        pictureUrl: 'https://s2.gaming-cdn.com/images/products/2245/271x377/biomutant-cover.jpg',
        category: 3
    },
    {
        id: 8015,
        title: 'Outriders',
        price: 20.09,
        pictureUrl: 'https://s3.gaming-cdn.com/images/products/4835/271x377/outriders-cover.jpg',
        category: 3
    },
    {
        id: 3089,
        title: 'Minecraft',
        price: 19.99,
        pictureUrl: 'https://s2.gaming-cdn.com/images/products/442/271x377/minecraft-cover.jpg',
        category: 3
    },
    // Games
    {
        id: 5663,
        title: 'Forza Horizon 4',
        price: 59.01,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/2682/271x377/forza-horizon-4-pc-xbox-one-cover.jpg',
        category: 4
    },
    {
        id: 6698,
        title: 'Sea of Thieves',
        price: 36.13,
        pictureUrl:
            'https://s2.gaming-cdn.com/images/products/967/271x377/sea-of-thieves-pc-xbox-one-cover.jpg',
        category: 4
    },
    {
        id: 4131,
        title: "Playerunknown's Battlegrounds",
        price: 59.88,
        pictureUrl:
            'https://s1.gaming-cdn.com/images/products/1995/271x377/playerunknowns-battlegrounds-cover.jpg',
        category: 4
    }
];
const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const onAdd = (count) => {
        console.log('count', count);
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
            <h3 className="">{greeting}</h3>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
            <ItemList
                items={categoryId ? items.filter((item) => item.category === parseInt(categoryId)) : items}
            />
        </div>
    );
};

export default ItemListContainer;
