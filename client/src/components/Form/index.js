import React from "react";
import "./style.css";

function Form(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <h2 className="centerTitle">Search Google Books</h2>
                    <div className="input-group mb-3">
                        <input
                            onChange={props.handleInputChange}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search here"
                            aria-label="Search here"
                            aria-describedby="button-addon2"
                            id="search"
                        />
                        <div className="input-group-append">
                            <button onClick={props.handleFormSubmit} className="btn btn-outline-primary" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Form;