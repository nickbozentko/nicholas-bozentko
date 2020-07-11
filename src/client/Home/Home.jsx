import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import CredentialsPanel from './CredentialsPanel.jsx';

import nickLogo from '../../../public/images/nickLogo.svg';


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
                <Col md>
                    <img
                        src={nickLogo}
                        height="120px"
                        width="120px"
                        style={{  margin: '10px', position: 'relative', float: 'left' }}
                    />
                    <span>
                        <h1 
                            style={{ 
                                fontSize: '40px',
                            }}
                        >
                            Hi, I'm Nick. 
                        </h1>
                        <span 
                            style={{ 
                                fontSize: '25px', 
                                color: 'gray',
                            }}
                        > Here's a little bit about me.
                        </span>
                    </span>
                </Col>
                <Col md={3}>
                    <div style={{ position: 'relative', float: 'right' }}>
                        <h3>Contact Me</h3>
                        <div>
                            <i className="fab fa-linkedin" style={{ color: 'black' }}></i>
                            <i className="fas fa-envelope" style={{ color: 'black' }}></i>
                        </div>
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