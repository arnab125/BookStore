//functional component

import React from 'react';
//cart.css
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const no = props.no;
    console.log('no is',no);
    return (
        <div className="cart">
            <h1>Lottery Result</h1>
            <div>
            
            {
                cart.map(book => <h4 className='special'><li>{book.name}</li>
                 <button><b>❌</b></button>
                </h4>)
                
            }
            </div>
           
            <div className='butt'> 
                <button><b>Check Result</b></button>
                <button><b>Try again</b></button>
            </div>
        </div>
    );
}

export default Cart;