//functional component
import React from 'react';
//import css
import './Last.css';

const Last = (props) => {
    return (
        <div className='last'>
            <div className='singleLine'>
                <h3>Winner is :</h3>
                <h3 className='winnn'> {props.winner}</h3>
            </div>
         </div>
    );
}


export default Last;