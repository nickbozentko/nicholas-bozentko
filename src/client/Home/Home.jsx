import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import CredentialsPanel from './CredentialsPanel.jsx';
import Header from './Header.jsx';



const Home = props => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

        return () => window.removeEventListener('resize', setWindowWidth(window.innerWidth));
    }, []);

    let collapseWidth = 778;

    return (
        <>
            <div 
                className="home-page" 
                style={{ 
                    fontFamily: 'Roboto',
                    marginLeft: '5%',
                    marginRight: '5%',
                }}
            >
                <Header 
                    collapseWidth={collapseWidth}
                    windowWidth={windowWidth}
                />

                <Row>
                    <Col xl>
                        <WorkExperiencePanel />

                        <ProjectsPanel windowWidth={windowWidth} />
                    </Col>
                    
                    <Col xl>
                        <EducationPanel />

                        <CredentialsPanel />
                    </Col>
                </Row>


            </div>

            <div 
                style={{ 
                    textAlign: 'center', 
                    paddingTop: '30px', 
                    paddingBottom: '60px',
                    backgroundColor: 'white',
                    borderTop: '1px solid lightgray',
                    paddingTop: '30px',
                    boxShadow: 'inset 0px 10px 10px -8px gray'
                }}
            >
                Nicholas Bozentko | <a href="https://github.com/nickbozentko/nicholas-bozentko" target="_blank">Source Code</a>
            </div>
        </>
    );
}

export default Home;