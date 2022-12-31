//functional
import React from 'react';
import './Book.css';


const Book = (props) => {
    const {name,company,address} = props.book;
    const add = props.add;
    const url = 'https://th.bing.com/th/id/OIP.W0bixaTYqsrmK2flYJHAXgHaKk?pid=ImgDet&w=800&h=1141&rs=1';
    return (
        <div className="book">
            <img src = {url} alt=""/>
            <h3>Name : {name}</h3>
            <h4>Company Name : {company.name}</h4>
            <h4>City : {address.city}</h4>
            <div className='buttonn'>
                <button onClick = {()=>add(props.book)}><b>Add to cart</b></button>
            </div>
        </div>
    );
};

export default Book;