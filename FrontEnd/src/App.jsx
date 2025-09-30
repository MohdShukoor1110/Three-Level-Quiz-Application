import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import ResultsPage from './Pages/ResultsPage';
import Header from './Components/Header';
import LevelSelection from './Components/LevelSelection';

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/difficulty" element={ <LevelSelection /> } />
                    <Route path="/quiz/:level" element={ <QuizPage /> }/>
                    <Route path="/results" element={ <ResultsPage /> }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
