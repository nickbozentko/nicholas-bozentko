import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import CredentialsPanel from './CredentialsPanel.jsx';

import nickLogo from '../../../public/images/nickLogo.svg';


const Home = props => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

        return () => window.removeEventListener('resize', setWindowWidth(window.innerWidth));
    }, []);

    let collapseWidth = 778;

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
                <Col md style={{ display: 'flex' }}>
                    <div style={{ margin: windowWidth > collapseWidth ? '' : '0 auto' }}>
                        <img
                            src={nickLogo}
                            height="130px"
                            width="130px"
                            style={{  
                                margin: '10px 25px 0 25px', 
                                position: 'relative', 
                                float: 'left' 
                            }}
                        />
                        <span style={{ display: 'flex', height: '100%' }}>
                            <div style={{ margin: 'auto 0' }}>
                                <h1 
                                    style={{ 
                                        fontSize: '50px',
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
                            </div>
                        </span>
                    </div>
                </Col>
                <Col md={4}>
                    <div
                        style={{ 
                            position: 'relative', 
                            float: windowWidth > collapseWidth ? 'right' : '', 
                            height: '100%', 
                            display: 'flex' 
                        }}
                    >
                        <div style={{ margin: windowWidth > collapseWidth ? 'auto 0' : 'auto auto' }}>
                            <h2>Contact Me</h2>
                            <div style={{ textAlign: 'center' }}>
                                <i 
                                    className="fab fa-linkedin" 
                                    style={{ 
                                        color: '#0072b1',
                                        marginRight: '10px',
                                        fontSize: '40px'
                                    }}
                                />
                                <i 
                                    className="fas fa-envelope" 
                                    style={{ 
                                        color: 'lightgray',
                                        marginRight: '10px',
                                        fontSize: '40px'
                                    }}
                                />
                            </div>
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