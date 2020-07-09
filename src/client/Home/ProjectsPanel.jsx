import React from 'react';

import Panel from '../general/Panel.jsx';
import MediaCard from '../general/MediaCard.jsx';
import LinkIcon from '../general/LinkIcon.jsx';
import SkillItem from '../general/SkillItem.jsx';
import gameOfCyclesImg from '../../../public/images/gameOfCycles.png';
import flappyBallImg from '../../../public/images/flappyBall.png';
import ticTacToeImg from '../../../public/images/ticTacToe.png';

const ProjectsPanel = props => {
    return(
        <Panel className="home-half-panel">
            <h2>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 325px)', justifyContent: 'center' }}>

                <MediaCard
                    imgSrc={gameOfCyclesImg}
                    title="Game of Cycles"
                    textContent="Implemented Game of Cycles to assist in research of winning strategies."
                    links={[
                        <LinkIcon 
                            iconName='fab fa-github'
                            link='https://github.com/nickbozentko/game-of-cycles'
                            key={0}
                        />
                    ]}
                    skills={[
                        <SkillItem color="#A8A8A8">Python</SkillItem>,
                        <SkillItem color="#A8A8A8">Cytoscape</SkillItem>
                    ]}
                />

                <MediaCard
                    imgSrc={flappyBallImg}
                    title="Flappy Ball"
                    textContent="A replica of a famous mobile game, playable in the browser. Try to beat my high score of 103."
                    links={[
                        <LinkIcon 
                            iconName='fas fa-link'
                            link='https://nickbozentko.github.io/flappy-ball/'
                            key={0}
                        />
                    ]}
                    skills={[
                        <SkillItem color="#A8A8A8">Unity</SkillItem>,
                        <SkillItem color="#A8A8A8">C#</SkillItem>
                    ]}
                />

                <MediaCard
                    imgSrc={ticTacToeImg}
                    title="Online Multiplayer Tic-Tac-Toe"
                    textContent="An online multiplayer game of Tic Tac Toe. Play with a friend or wait to be paired with an opponent."
                    links={[
                        <LinkIcon 
                            iconName='fab fa-github'
                            link='https://github.com/nickbozentko/tic-tac-toe'
                            key={0}
                        />,
                        <LinkIcon 
                            iconName='fas fa-link'
                            link='http://ec2-3-21-76-173.us-east-2.compute.amazonaws.com/'
                            key={1}
                        />
                    ]}
                    skills={[
                        <SkillItem color="#A8A8A8">Node.js</SkillItem>,
                        <SkillItem color="#A8A8A8">React</SkillItem>,
                        <SkillItem color="#A8A8A8">Socket.io</SkillItem>
                    ]}
                />
                
            </div>
        </Panel>
    )
}

export default ProjectsPanel;