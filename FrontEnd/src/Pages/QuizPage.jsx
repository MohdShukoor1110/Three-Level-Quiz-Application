import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Card, Button, Alert } from "react-bootstrap";

import DisplayQuestions from '../Components/DisplayQuestions';

const API_BASE_URL = "http://localhost:1001/api/quiz";

function QuizPage() {
    const { level } = useParams();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${API_BASE_URL}/${level}`);
                setQuestions(res.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch questons. Check server connection.');
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [level]);

    const handleAnswerCharge = (questionId, selectedOption) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const handleSubmit = async() => {
        const answeredCount = Object.keys(userAnswers).length;
        if (answeredCount !== questions.length) {
            alert(`Please answer all ${questions.length} questions before submitting. You have answered ${answeredCount}.`);
            return;
        }

        let score = 0;
        try {
            const res = await axios.post(`${API_BASE_URL}/submit`, { level, userAnswers });
            navigate('/results', { state: { questions, userAnswers, level } });
        } catch (error) {
            console.error("Submission error. Mocking result display.", error);
            navigate('/results', { state: { questions, userAnswers, level } });
        }
    };

    if (loading) return <Alert variant="info">Loading {level} questons...</Alert>;
    if (error) return <Alert variant="danger">{error}</Alert>

    return (
        <div>
            <h2 className="text-capitalize mb-4">Level : {level} Quiz</h2>
            {questions.map((q, index) => (
                <Card key={q.id} className="mb-3 shadow-sm">
                    <Card.Body>
                        <DisplayQuestions
                            question={q}
                            index={index}
                            onAnswerSelect={handleAnswerCharge}
                            selectedAnswer={userAnswers[q.id]}
                        />
                    </Card.Body>
                </Card>
            ))};
            <div className="text-center my-5">
                <Button variant="primary" size="lg" onClick={handleSubmit}>Submit Quiz</Button>
            </div>
        </div>
    )
}

export default QuizPage