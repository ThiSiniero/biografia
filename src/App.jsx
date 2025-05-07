import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home';
import Apresentation from './components/Apresentation';
import Formação from './components/Formação';

function App() {
    return (<>
        <Navbar/>
        <Apresentation/>
        <Formação/>
    </>);
}

export default App;