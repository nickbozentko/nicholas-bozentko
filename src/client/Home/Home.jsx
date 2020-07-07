import React from 'react';

import './Home.css';
import EducationPanel from './EducationPanel.jsx';
import WorkExperiencePanel from './WorkExperiencePanel.jsx';
import MediaCard from '../general/MediaCard.jsx';

import gameOfCyclesImg from '../../../public/images/gameOfCycles.png';
import flappyBallImg from '../../../public/images/flappyBall.png';
import ticTacToeImg from '../../../public/images/ticTacToe.png';
import Panel from '../general/Panel.jsx';


const Home = props => {
    return (
        <div className="home-page">
            <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
                Hi, I'm Nick. 
                <spam style={{ fontSize: '25px', color: 'gray' }}> Here's a little bit about me.</spam>
            </h1>

            <div className="panels-wrapper">

                <EducationPanel />

                <WorkExperiencePanel />

                <Panel className="home-half-panel">
                    <h2>Projects</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 300px)', justifyContent: 'center' }}>

                        <MediaCard
                            imgSrc={gameOfCyclesImg}
                            title="Game of Cycles"
                            textContent="Implemented Game of Cycles to be played"
                        />

                        <MediaCard
                            imgSrc={ticTacToeImg}
                            title="Online Multiplayer Tic-Tac-Toe"
                            textContent="An online multiplayer implementation of Tic Tac Toe"
                        />
                        
                        <MediaCard
                            imgSrc={flappyBallImg}
                            title="Flappy Ball"
                            textContent="A replica of a famous mobile game implemented in the browser. Made with Unity."
                        />

                    </div>

                </Panel>

                <Panel className="home-half-panel">
                    <h2>Honors and Certifications</h2>


                </Panel>
            </div>
        </div>
    );
}

export default Home;