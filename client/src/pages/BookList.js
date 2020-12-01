import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import "./style.css";
import axios from "axios";

function BookList() {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
       
        const source = axios.CancelToken.source();

        API.bookList({cancelToken: source.token})
        
        .then(bookList => setBookList(bookList))
        .catch(err => console.error(err))
        
        return() => {
            source.cancel("Component got unmounted");
        }
    },[bookList])
  
        return (
            <div className="container">
                <h2 className="center">BOOK LIST</h2>
                <Results books={bookList}/>
            </div>
        )
    
};

export default BookList;