import React from 'react';

import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import PersonalDetails from '../components/PersonalDetails.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';

const App = () => (<>
    <Header />
    <div className="body">
        <Nav />
        <Hero />
        <PersonalDetails />
        <Projects />
    </div>
    <Footer />
</>);

export default App;
