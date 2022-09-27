import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import ShowFoodDetails from '../ShowFoodDetails/ShowFoodDetails';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [])

    const [selectedFood, setSelectedFood] = useState({})

    const viewDetailsHandler = (id) => {
        const targetFood = foods.find(food => food.idMeal === id);
        if (targetFood) {
            setSelectedFood(targetFood);
        }
    }
    console.log(selectedFood);

    return (
        <div className='foods'>
            <div className="foods-container">
                {
                    foods.map(food => <Food food={food} viewDetailsHandler={viewDetailsHandler} key={food.idMeal}></Food>)
                }
            </div>
            <div className="food-details">
                <ShowFoodDetails food={selectedFood}></ShowFoodDetails>
            </div>

        </div>
    );
};

export default Foods;