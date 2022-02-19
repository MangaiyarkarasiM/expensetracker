import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const navitems = [
    {
        to : "/",
        title : "Home"
    },
    {
        to : "/incomes",
        title : "Incomes"
    },
    {
        to : "/expenses",
        title : "Expenses"
    }
];
let activeStyle = {
    color: "red"
  };

const Header = () =>{

    return(
        <div id="wrapper" className="mb-4">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand text-light font-weight-bold" to="/">Tracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-light" id="navbarNav">
                    {navitems.map(nav => {
                        return <div key={nav.title}>
                                <NavLink key={nav.title} style = {(isActive)=>isActive ? activeStyle: null}
                        className="mx-4 text-white" to={nav.to}>{nav.title}</NavLink>
                        </div>;
                        })}
                </div>
            </nav>
        </div>
    );
}

export default Header;