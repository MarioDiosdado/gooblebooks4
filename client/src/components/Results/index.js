import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Results(props) {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        API.bookList()
            .then(bookList => setBookList(bookList))
            .catch(err => console.error(err))

            return() => {
                API.bookList()
            }
    }, []);

    const handleSave = book => {
        if (bookList.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => setBookList(bookList.filter(book => book._id !== deletedBook._id)))
                .catch(err => console.error(err));  
        } else {
            API.saveBook(book)
                .then(savedBook => {
                    setBookList(bookList.concat([savedBook]))
                    alert("Saved!")
                })
                .catch(err => console.error(err));  
        }
    }

    return (
        <div>
            {props.books.map(result => (
                <div className="card mb-3" key={result._id}>
                    <div className="row">
                        <div className="col-md-12">
                            <img alt={result.title} className="center-block" src={result.image} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="cold-md-10">
                            <div className="card-body">
                                <h5 className="center">{result.title} by {result.authors}</h5>
                                <p className="center" >{result.description}</p>
                                <div>
                                    <a href={result.link} className="btn btn-outline-primary" target="_blank" rel="noreferrer">Go to book</a>
                                    <div className="divider"></div>
                                    <button onClick={() => handleSave(result)} className="btn btn-outline-primary" >
                                        {bookList.map(book => book._id).includes(result._id) ? "Delete Book" : "Save Book"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            )
            }
        </div >
    )
}

export default Results;