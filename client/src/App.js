import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Login from './Login.js';
import HomePage from './HomePage.js'; 

function App() {
    return (
        <Router>
          <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
    );
}

export default App;
