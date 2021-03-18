import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { RiMenu5Line } from 'react-icons/ri';
import logo from '../../assets/primary.png';
import './NavBar.css';

const Categories = [
    {
        name: 'Anime & Videos',
        url: 'animeandvideos'
    },
    {
        name: 'Manga & Books',
        url: 'mangaandbooks'
    },
    {
        name: 'Figures',
        url: 'figures'
    },
    {
        name: 'Games',
        url: 'games'
    }
];
const NavBar = () => {
    const getCategories = Categories.map((category) => (
        <li key={category.name} className="nav-item small">
            <a className="nav-link active" aria-current="page" href={category.url}>
                {category.name}
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
                        <span className="btn btn-lg link-secondary">
                            <RiMenu5Line />
                        </span>
                    </button>
                    <a className="flex-grow-1 navbar-brand fw-bold" href="/">
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
