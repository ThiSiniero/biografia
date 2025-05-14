import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home';
import Apresentation from './components/Apresentation';
import Formação from './components/Formação';
import Competences from './components/Competences';
import Projects from './components/Projects';
import About from './components/About';

function App() {
    return (<>
        <Navbar/>
        <Apresentation/>
        <Formação/>
        <Competences/>
        <Projects/>
        <About/>
    </>);
}

export default App;