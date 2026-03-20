
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className="cart-item-container">
            {
                cart.map((item, index) => (
                    <div key={index} className="cart-item-card">
                        <img src={item.strMealThumb} alt="" />
                        <div className="cart-item-details">
                            <h4>{item.strMeal}</h4>
                            
                            <p className="quantity-text">
                                ({item.quantity} has been added)
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;