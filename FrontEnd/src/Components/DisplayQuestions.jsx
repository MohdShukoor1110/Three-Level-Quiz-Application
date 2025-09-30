import React from 'react';
import { Form } from "react-bootstrap";

function DisplayQuestions({ question, index, onAnswerSelect, selectedAnswer }) {
    return (
        <div>
            <Form>
                <h5 className="mb-3">{index + 1}. {question.text}</h5>
                {question.options.map((option, idx) => (
                    <Form.Check
                        key={idx}
                        type="radio"
                        id={`q${question.id}-option${idx}`}
                        label={option}
                        name={`question-${question.id}`}
                        checked={selectedAnswer === option}
                        onChange={() => onAnswerSelect(question.id, option)}
                        className="mb-2"
                    />
                ))}
            </Form>
        </div>
    )
}

export default DisplayQuestions