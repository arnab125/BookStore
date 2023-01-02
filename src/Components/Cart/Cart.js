//functional component

import React from 'react';
//cart.css
import './Cart.css';


const Cart = (props) => {
    const cart = props.carti;
    console.log(cart);
    return (
        <div>
            
            <div className='para'>
                <h4><li>{cart.name}</li></h4>
                <button className='ab' onClick={()=>props.remove(cart.id)}><b>❌</b></button>
            </div> 
        </div>
    );
}

export default Cart;