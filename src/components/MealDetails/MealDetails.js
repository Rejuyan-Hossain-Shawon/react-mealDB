import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    let history = useHistory();
    const { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState({})
    const { strInstructions, strArea, strMeal, strMealThumb } = mealDetails;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [])
    const handleMealDetailsBtn = () => {
        history.push("/home");
    }
    return (
        <div>
            <h2>This is  detials of {strMeal}</h2>
            <p>{strInstructions}</p>
            <p>{strArea}</p>
            <img src={strMealThumb} alt="" />
            <br />
            <Button onClick={handleMealDetailsBtn}>Home</Button>
        </div>
    );
};

export default MealDetails;