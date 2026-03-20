import React from 'react';
import "./SingleFood.css"

const SingleFood = ({ food, addToCard }) => { 
    console.log(food);
    return (
        <div className="food-card">
            <img src={food.strMealThumb} alt="" />
            <h1>{food.strMeal}</h1>
            <button onClick={() => addToCard(food)} className='add-to-cart-btn'>
                Add To Cart
            </button>
        </div>
    );
};

export default SingleFood;

