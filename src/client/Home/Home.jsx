import React from 'react';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import MediaCard from '../general/MediaCard.jsx';

import gameOfCyclesImg from '../../../public/images/gameOfCycles.png';
import flappyBallImg from '../../../public/images/flappyBall.png';
import ticTacToeImg from '../../../public/images/ticTacToe.png';
import Panel from '../general/Panel.jsx';

import { Row, Col } from 'react-bootstrap';


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

                    <Panel className="home-half-panel">
                        <h2>Projects</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 250px)', justifyContent: 'center' }}>

                            <MediaCard
                                imgSrc={gameOfCyclesImg}
                                title="Game of Cycles"
                                textContent="Implemented Game of Cycles to assist in research of winning strategies."
                            />

                            <MediaCard
                                imgSrc={ticTacToeImg}
                                title="Online Multiplayer Tic-Tac-Toe"
                                textContent="An online multiplayer game of Tic Tac Toe. Play with a friend or wait to be paired with an opponent."
                            />
                            
                            <MediaCard
                                imgSrc={flappyBallImg}
                                title="Flappy Ball"
                                textContent="A replica of a famous mobile game, playable in the browser. Made with Unity."
                            />

                        </div>
                    </Panel>
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