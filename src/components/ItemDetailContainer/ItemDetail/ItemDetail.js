import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div>
            {item && item.price && (
                <div className="row shadow p-5 rounded-3 shadow">
                    <div className="col-md">
                        <img src={item.pictureUrl} alt="" />
                    </div>
                    <div className="col-md mb-5 mt-5 p-5 bg-warning">
                        <h3 className="font-monospace fw-bold">{item.title}</h3>
                        <p className="text-secondary fw-bold">{item.description}</p>
                        <span className="badge bg-dark fs-6 price">Price: ${item.price}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;
