import React, {useState} from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const [value, setValue] = useState("");

    const addBook = data => {
        return {
            _id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description,
            image: data.volumeInfo.imageLinks.thumbnail,
            link: data.volumeInfo.previewLink
        }
    }

    const searchBook = query => {
        API.getBook(query)
            .then(res => setBooks(res.data.items.map(data => addBook(data))))
            .catch(err => console.error(err));  
    };

    const handleInputChange =  event => {
        const name = event.target.name;
        const value = event.target.value;
        setValue({[name]: value});
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        searchBook(value.search);
    };

   
        return (
            <div>
                <Form
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
                <div className="container">
                    <Results books={books}/>
                </div>
            </div>
        )
    
}

export default Search;