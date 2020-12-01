import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Google Books Search</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className="nav-link">Saved books</Link>
                    </li>
                </ul>    
        </nav>
    );
}

export default Navbar;

