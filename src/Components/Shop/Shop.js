//functional component
import React from 'react';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
    const [books,setBooks] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setBooks(data))
    console.log(books);
},[])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    books.map(book=><h1>{book.ISBN}</h1>)
                }
            </div>
            <div className="cart-container">
                <p>ORDERjhS</p>
            </div>
        </div>
    );
}

export default Shop;