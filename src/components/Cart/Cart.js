import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { RiDeleteBin2Line } from 'react-icons/ri';
import './Cart.css';

const Cart = () => {
    var { cart, removeItem, getTotal } = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10 container">
                    {cart && !!cart.length ? (
                        cart.map((line) => {
                            return (
                                <div className="row" key={line.item.id}>
                                    <div className="col-md-3">
                                        <img
                                            className="img-thumbnail rounded mx-auto d-block cartImage"
                                            src={line.item.pictureUrl}
                                            alt={line.item.title}
                                        />{' '}
                                    </div>
                                    <div className="col-md-3">
                                        <h4 className="text-secondary">{line.item.title}</h4>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="text-secondary"> Price: ${line.item.price}</p>
                                        <p className="text-secondary"> Quantity: {line.quantity}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <button
                                            onClick={(e) => removeItem(line.item.id)}
                                            className="btn btn-warning"
                                        >
                                            <RiDeleteBin2Line />
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div class="alert alert-primary" role="alert">
                            <p>
                                <strong>Your cart is empty! </strong>
                            </p>
                            <NavLink to="/">
                                <button className="btn btn-light btn-sm">Home</button>
                            </NavLink>
                        </div>
                    )}
                </div>
                <div className="col-sm-2">
                    <div class="card border shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Summary</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Total: ${getTotal()}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
