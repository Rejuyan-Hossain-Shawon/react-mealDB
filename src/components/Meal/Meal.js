import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Meal.css"
const Meal = (props) => {

    const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <Col className="meal-container" >
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 250)}
                        <br />
                        <Button ><Link className="text-warning" to={`/home/${idMeal}`}>Details</Link></Button>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meal;