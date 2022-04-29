//Create the header component for header of website
import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <p className="navbar-brand"> Data chatree</p>
             <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link"> Home </Link>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item"></li>
             </ul>
        </nav>
    )
}

export default Header;