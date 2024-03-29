import React from 'react';

import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Links from '../components/Links.jsx';
import Work from '../components/Work.jsx';
import Education from '../components/Education.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';

const App = () => (<>
    <Header />
    <div className="body">
        <Nav />
        <Hero />
        <Links />
        <div className="two-grid">
            <Work />
            <Education />
        </div>
        <Projects />
        <Skills />
    </div>
    <Footer />
</>);

export default App;