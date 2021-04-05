import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import {
    RiMenu5Line,
    RiXboxLine,
    RiPlaystationFill,
    RiComputerLine,
    RiRemoteControl2Line
} from 'react-icons/ri';
import logo from '../../assets/gamesnow.jpeg';
import './NavBar.css';

const Categories = [
    {
        name: 'PlayStation',
        id: 1,
        icon: <RiPlaystationFill />
    },
    {
        name: 'Xbox',
        id: 2,
        icon: <RiXboxLine />
    },
    {
        name: 'Nintendo',
        id: 3,
        icon: <RiRemoteControl2Line />
    },
    {
        name: 'PC',
        id: 4,
        icon: <RiComputerLine />
    }
];
const NavBar = () => {
    const getCategories = Categories.map((category) => (
        <li key={category.name} className="nav-item small m-1">
            <Link className="nav-link active text-light" aria-current="page" to={`/category/${category.id}`}>
                <span className="fs-4 m-1">{category.icon}</span>
            </Link>
        </li>
    ));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm mb-5">
            <div className="container-fluid container-lg">
                <button
                    className="me-4 navbar-toggler shadow-lg rounded-pill"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="btn btn-lg link-secondary shadow-none">
                        <RiMenu5Line className="shadow-none" />
                    </span>
                </button>
                <Link className="flex-grow-1 navbar-brand fw-bold" to="/">
                    <img alt="GamesNow" className="brand-image rounded-3" src={logo} />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav fw-bolder mt-4 m-lg-0"> {getCategories} </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
