import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import CredentialsPanel from './CredentialsPanel.jsx';


const Home = props => {
    return (
        <div 
            className="home-page" 
            style={{ 
                fontFamily: 'Roboto',
                marginLeft: '5%',
                marginRight: '5%',
            }}
        >
            <Row>
                <Col>
                    <h1 
                        style={{ 
                            fontSize: '40px',
                            marginLeft: '35px'
                        }}
                    >
                        Hi, I'm Nick. 
                    </h1>
                    <span 
                        style={{ 
                            fontSize: '25px', 
                            color: 'gray',
                            marginLeft: '35px'
                        }}
                    > Here's a little bit about me.
                    </span>
                </Col>
                <Col>
                    <h5>Contact Me</h5>
                    <div>
                        <i className="fab fa-linkedin" style={{ color: 'black' }}></i>
                        <i className="fas fa-envelope" style={{ color: 'black' }}></i>
                    </div>
                </Col>
            </Row>


            <Row>
                <Col xl>
                    <EducationPanel />

                    <ProjectsPanel />
                </Col>
                
                <Col xl>
                    <WorkExperiencePanel />

                    <CredentialsPanel />
                </Col>
            </Row>
        </div>
    );
}

export default Home;