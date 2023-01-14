//functional
import React from 'react';
import './Book.css';


const Book = (props) => {
    const {name,company,address} = props.book;
    const add = props.add;
    const url = 'https://th.bing.com/th/id/R.2da04171bf70a9310f4ffb1ffc006465?rik=XB6SzOzZcf3XhQ&pid=ImgRaw&r=0s';
    return (
        <div className="book">
            <img src = {url} alt=""/>
            <h3>Name : {name}</h3>
            <h4>Company Name : {company.name}</h4>
            <h4>City : {address.city}</h4>
            <div className='buttonn'>
                <button onClick = {()=>add(props.book)}><b>Add to Selection</b></button>
            </div>
        </div>
    );
};

export default Book;