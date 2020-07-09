import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';

import Panel from '../general/Panel.jsx';





const Home = props => {
    return (
        <div 
            className="home-page" 
            style={{ 
                fontFamily: 'Roboto',
                marginLeft: '5%',
                marginRight: '5%'
            }}
        >
            <h1 
                style={{ textAlign: 'center', fontSize: '40px' }}
            >
                Hi, I'm Nick. 
                <span style={{ fontSize: '25px', color: 'gray' }}> Here's a little bit about me.</span>
            </h1>

            <Row>
                <Col xl>
                    <EducationPanel />

                    <ProjectsPanel />
                </Col>
                
                <Col xl>
                    <WorkExperiencePanel />

                    <Panel className="home-half-panel">
                        <h2>Honors and Certifications</h2>
                    </Panel>
                </Col>
            </Row>
        </div>
    );
}

export default Home;