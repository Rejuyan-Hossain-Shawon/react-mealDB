import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restrurent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const handleMealSearch = (e) => {
        const search = e.target.value;

        setSearchText(search);

    }

    useEffect(() => {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))


    }, [searchText])


    return (
        <div >
            <h1 className="text-success">Shawon Meals worlds Search for your meals</h1>
            <InputGroup className="mb-3 w-50 mx-auto mt-2">
                <FormControl onChange={handleMealSearch}
                    placeholder="Search by Meal Name"

                />

            </InputGroup>
            <Row xs={1} md={3} lg={4} className="g-2 justify-content-center  fluid mx-auto ">
                {
                    meals.map(ml => <Meal key={ml.idMeal} meal={ml}></Meal>)
                }


            </Row>

        </div>
    );
};

export default Restrurent;