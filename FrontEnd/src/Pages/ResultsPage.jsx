import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Alert, Button } from 'react-bootstrap';

import easyQuestions from '../Data/EasyQuestions.json'
import mediumQuestions from '../Data/MediumQuestions.json'
import hardQuestions from '../Data/HardQuestions.json'

const getCorrectAnswer = (questionId, level) => {
    const allQuestions = [...easyQuestions ,...mediumQuestions, ...hardQuestions]; 
    const q = allQuestions.find(q => q.id === questionId && q.difficulty === level);
    return q ? q.correctAnswer : null;
};

const ResultsPage = () => {
    const location = useLocation();
    const { questions, userAnswers, level } = location.state || {};
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (questions && userAnswers) {
            let calculatedScore = 0;
            questions.forEach(q => {
                const correct = getCorrectAnswer(q.id, level);
                if (userAnswers[q.id] === correct) {
                    calculatedScore += 1;
                }
            });
            setScore(calculatedScore);
        }
    }, [questions, userAnswers, level]);

    if (!questions) {
        return <Alert variant="warning">No results data found. Please take a quiz first.</Alert>;
    }

    return (
        <div className="text-center">
            <h1 className="mb-4">Quiz Results 🏆</h1>
            <Card className="shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
                <Card.Header as="h3" className="bg-primary text-white">Your Score</Card.Header>
                <Card.Body>
                    <Alert variant={score > questions.length / 2 ? 'success' : 'danger'} className="mb-4">
                        <h2>You scored **{score}** out of **{questions.length}**!</h2>
                    </Alert>
                    <p className="lead">Difficulty Level: <strong className="text-capitalize">{level}</strong></p>
                    <Button variant="info" href="/">Go Back to Home</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ResultsPage;