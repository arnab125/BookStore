//functional component
import React from 'react';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [books,setBooks] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        const getBooks = async () => {
           try {
            //books.json is a local file
             let res = await fetch('https://jsonplaceholder.typicode.com/users')
             let data = await res.json()
             setBooks(data)         
           } catch (error) {
             console.log(error.message)
           }
        }

        getBooks()
        
    }, [])

    const add = (book) => {
        //console.log('added',book);
        setCart([...cart,book]);
    }

    //console.log(cart);
    let x = cart.length;
    let y = [];
    for (let i = 0; i < x; i++) {
        y.push(i+1);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    books.map(book => <Book 
                    book = {book}
                    add = {add}></Book>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart} 
                no ={y}></Cart>
                
            </div>
        </div>
    );
}

export default Shop;