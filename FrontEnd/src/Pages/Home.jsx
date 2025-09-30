import React from 'react';

import QuizRules from '../Components/QuizRules';

function Home() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="text-center mb-4">Multi-level Quiz Application</h1>
                <QuizRules/>
            </div>
        </div>
    )
}

export default Home