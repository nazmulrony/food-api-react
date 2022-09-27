import React from 'react';
import './ShowFoodDetails.css'
const ShowFoodDetails = (props) => {
    console.log(props);
    const { strMealThumb, strMeal, strArea, strInstructions } = props.food;
    return (
        <div className='details'>
            <div className="img-container">
                <img src={strMealThumb} alt="" />
            </div>
            <h5>Item Name: {strMeal}</h5>
            <p>Region: {strArea}</p>
            <p><small>Instructions: {strInstructions}</small></p>


        </div>
    );
};

export default ShowFoodDetails;