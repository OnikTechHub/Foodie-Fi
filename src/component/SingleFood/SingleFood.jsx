import React from 'react';
import "./SingleFood.css"

const SingleFood = (food) => {
    console.log(food.food)
    return (
        <div className="food-card">
            <img src={food.food.strMealThumb} alt="" />
            <h1>{food.food.strMeal}</h1>
            <button className='add-to-cart-btn'>Add To Cart</button>
        </div>
    );
};

export default SingleFood;

