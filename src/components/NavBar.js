import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/primary.png';

const Categories = ['Home', 'Shop', 'Contact'];

const NavBar = () => {
    const getCategories = Categories.map((category) => (
        <li key={category} className="nav-item small">
            <a className="nav-link active" aria-current="page" href={`#${category.toLowerCase()}`}>
                {category}
            </a>
        </li>
    ));

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <a className="navbar-brand fw-bold" href={`#${Categories[0]}`}>
                        <img alt="GamesNow" className="brand-image" src={logo} />
                        <span>GamesNow</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-bolder mt-4 m-lg-0"> {getCategories} </ul>
                    </div>
                    <button className="btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
