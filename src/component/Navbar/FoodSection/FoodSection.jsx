import React from 'react';
import { use } from 'react';
import SingleFood from '../../SingleFood/SingleFood';
import "./FoodSection.css"

const FoodSection = ({ foodDataRes }) => {

    const data = use(foodDataRes)

    const foods = data.meals
    console.log(foods)


    return (
        <div className='food-container-parent'>
            <div className='food-grid'>
                {
                    foods.map(food => <SingleFood food={food}></SingleFood>)
                }

            </div>
            <div className='cart-container'>
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default FoodSection;