import React from 'react';
import './header.css';
import  {FaShoppingCart}  from "react-icons/fa";

function header() {
    return (
        <div>
            <div className ="header">
                <div className = "foodie__do">
                    <h1>FOODIE<span>'s</span> Be HERE</h1>  
                </div>
                <div className = "cart">
                <FaShoppingCart/>
                </div>
            </div>
        </div>
    )
}

export default header
