import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Header() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Google Books Search</h1>
                <p className="lead">Create a list of your favorite books found on Google Books!.</p>
                <hr className="my-4"></hr>
                <Link to="/search" className="btn btn-primary btn-lg"  role="button">Search Books</Link>
                <div className="divider">
                <Link to="/saved" className="btn btn-primary btn-lg"  role="button">Saved Books</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;