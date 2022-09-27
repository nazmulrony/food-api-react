import { faCircleInfo, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css'

const Food = (props) => {
    const { strMealThumb, strMeal, strArea, strInstructions, idMeal } = props.food;
    // console.log(props);
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>Region: {strArea}</p>
            <button className='btn-food' onClick={() => props.viewDetailsHandler(idMeal)}>
                <p>View details</p>
                <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;