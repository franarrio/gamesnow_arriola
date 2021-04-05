import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail/ItemDetail';
import { ItemsMock } from '../../ItemMock';

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
