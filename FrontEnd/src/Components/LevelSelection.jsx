import React from 'react';
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function LevelSelection() {
    const navigate = useNavigate();

    const selectLevel = (level) => {
        navigate(`/quiz/${level}`);
    };

    return (
        <>
            <h1 className="text-center mb-4">Multi-level Quiz Application</h1>
            <Card className="shadow mt-5" id="dificulty-selector">
                <Card.Header as="h5" className="bg-info text-white">Choose Your Challenge Level 💪</Card.Header>
                <Card.Body className="d-flex justify-content-around">
                    <Button variant="outline-success" onClick={() => selectLevel('easy')}>Easy</Button>
                    <Button variant="outline-warning" onClick={() => selectLevel('medium')}>Medium</Button>
                    <Button variant="outline-danger" onClick={() => selectLevel('hard')}>Hard</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default LevelSelection