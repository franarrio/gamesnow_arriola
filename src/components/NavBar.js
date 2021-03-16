import React from 'react';
import CartWidget from './CartWidget';
import { RiMenu5Line } from 'react-icons/ri';
import logo from '../assets/primary.png';
import './NavBar.css';

const Categories = ['Home', 'Shop', 'Contact'];

const NavBar = () => {
    const getCategories = Categories.map((category) => (
        <li key={category} className="nav-item small">
            <a className="nav-link active" aria-current="page" href={`${category.toLowerCase()}`}>
                {category}
            </a>
        </li>
    ));

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-5">
                <div className="container-fluid container-lg">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <button className="btn btn-lg link-secondary">
                            <RiMenu5Line />
                        </button>
                    </button>
                    <a className="flex-grow-1 navbar-brand fw-bold" href={Categories[0].toLowerCase()}>
                        <img alt="GamesNow" className="brand-image" src={logo} />
                        <span>GamesNow</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-bolder mt-4 m-lg-0 ps-3"> {getCategories} </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
