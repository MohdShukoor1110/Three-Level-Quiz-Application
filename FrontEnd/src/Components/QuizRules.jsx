import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import LevelSelection from './LevelSelection';

function QuizRules() {
    const navigate = useNavigate();

    const handleStartQuizClick = () => {
      navigate('/difficulty');
    };
    return (
        <Card className="shadow">
            <Card.Header as="h5" className="bg-primary text-white">Quiz Rules & Instructions 📝</Card.Header>
            <Card.Body>
                <ul>
                    <li>This quix has three levels: **Easy**, **Medium**, and **Hard**.</li>
                    <li>Each level contains **10-unique-questions**.</li>
                    <li>You must select a difficulty level to start.</li>
                    <li>Marks will be calculated based on correct answers.</li>
                    <li>You **must** answer all 10 questions before submitting.</li>
                    <li>Click the **Get-Started** button to proceed to difficulty selection</li>
                </ul>
                <div className="text-center mt-4">
                    <Button variant="success" onClick={handleStartQuizClick}>Get Started</Button>
                </div>
            </Card.Body>
      </Card>
    )
}

export default QuizRules