//functional component
import React from 'react';
import './Shop.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import Last from '../Last/Last';

const Shop = () => {
    const [books,setBooks] = useState([]);
    const [cart,setCart] = useState([]);
    const [winner,setWinner] = useState("");

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
        for(const p of cart){
            if(p.name === book.name){
                alert('Already added');
                return;
            }
        }
        setCart([...cart,book]);
    }

    const remove = (book) => {
        //console.log('removed',book);
        //remove from cart
        const newCart = cart.filter(cartSingle => cartSingle.id !== book);
        setCart(newCart);
        
    }

    function getRndInteger(min, max) {
        setWinner((cart[(Math.floor(Math.random() * (max - min +1 )) + min)].name));
        
    }    

    const delete_all = () => {
        setCart([]);
        setWinner("");
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    books.map(book => <Book 
                    book = {book}
                    add = {add}>
                    </Book>)
                }
            </div>
              <div className="cart-container">
                <div className='sticky'>
                    <h1>Lottery Result</h1>
                    <div className='para2'>
                        <h3>Name</h3>
                        <h3>Remove</h3>
                    </div>
                    {
                        cart.map(cartSingle => <Cart carti = {cartSingle} remove = {remove}></Cart>)
                    }
                    <div className='butt'> 
                        <button onClick={()=>getRndInteger(0, (cart.length)-1)}><b>Check Result</b></button>
                        <button onClick={()=>delete_all()}><b>Try again</b></button>
                        <Last winner = {winner}></Last>
                         
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Shop;