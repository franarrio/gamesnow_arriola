import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    const onAdd = (count) => {
        console.log('count', count);
        console.log('onAdd ItemListContainer');
    };

    return (
        <div className="container">
            <h3>{greeting}</h3>
            <ItemCount stock={5} initial={0} onAdd={onAdd} />
        </div> 
    );
};

export default ItemListContainer;
