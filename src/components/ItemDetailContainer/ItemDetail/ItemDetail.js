import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const { addItem } = useContext(CartContext);
    const ondAddHandler = (count) => setCount(count);

    return (
        <div>
            {item && item.price && (
                <div className="row p-5 rounded-1 bg-secondary">
                    <div className="col-md-6">
                        <img className="" src={item.pictureUrl} alt={item.title} />
                    </div>
                    <div className="bg-warning col-md-6 mb-5 p-5 rounded-3">
                        <h3 className=" fw-bold">{item.title}</h3>
                        <p className="fw-light mb-4 mt-4 text-secondary">{item.description}</p>
                        <span className="badge bg-dark fs-6 price">${item.price}</span>
                        {count === 0 ? (
                            <ItemCount stock={item.stock} initial={0} onAdd={ondAddHandler} />
                        ) : (
                            <Link className="btn border-secondary btn-add" to="/cart">
                                <button
                                    className="btn border-secondary btn-add"
                                    onClick={() => {
                                        addItem(item, count);
                                    }}
                                >
                                    Finish Order
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;
