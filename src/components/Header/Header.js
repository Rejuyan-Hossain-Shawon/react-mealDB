import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav>
            <NavLink activeStyle={style} className="text-decoration-none " to="/home">Home</NavLink>
            <NavLink activeStyle={style} className="text-decoration-none " to="/about">About</NavLink>
            <NavLink activeStyle={style} className="text-decoration-none " to="/contact">Contact</NavLink>

        </nav>
    );
};

export default Header;