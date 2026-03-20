import React, { useState } from 'react';
import { use } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import "./FoodSection.css"
import Cart from "../Cart/Cart"

import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ foodDataRes }) => {
    const data = use(foodDataRes)
    const foods = data.meals

    const [cart, setCart] = useState([]);
    const addToCart = (foodData) => {

        const isExist = cart.find(item => item.idMeal === foodData.idMeal);

        if (isExist) {
            const newCart = cart.map(item => {
                if (item.idMeal === foodData.idMeal) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
            setCart(newCart);
        } else {
            const newFoodItem = { ...foodData, quantity: 1 };
            setCart([...cart, newFoodItem]);
        }
    };

    const handleOrder = () => {
        setCart([])
        toast.success("Order Completed!");
    }
    return (
        <div className='food-container-parent'>
            <div className='food-grid'>
                {
                    foods.map(food => (
                        <SingleFood
                            key={food.idMeal}
                            addToCard={addToCart}
                            food={food}
                        />
                    ))
                }
            </div>

            <div className='cart-container'>
                <h1 className='cart-title'>Cart ({cart.length})</h1>
                <Cart cart={cart} />
                <button onClick={handleOrder} className='primary-btn'>Order Now</button>
            </div>

           
            <ToastContainer 
                position="top-right" 
                autoClose={2000} 
                style={{ zIndex: 999999 }} 
            />
        </div>
    );
};

export default FoodSection;