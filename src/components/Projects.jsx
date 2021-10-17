import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faServer } from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
    <div className="projects-root">
        <div className="title">Projects</div>
        <div className="projects-holder">
            
            <Project 
                imgSrc="/gameOfCycles.png"
                name="Game Of Cycles"
                description="
                The Game of Cycles is played on a connected planar graph.
                Players take turns marking edges with the objective of being the first to complete a cycle cell.
                In this project, I implemented the Game of Cycles with a browser interface to assist in academic research of winning strategies.
                "
                skills={["Python", "Cytoscape"]}
                skillsColor="#ff2424"
                sourceCode="https://github.com/nickbozentko/game-of-cycles"
            />

            <Project 
                imgSrc="/flappyBall.png"
                name="Flappy Ball"
                description="
                A replica of a famous mobile game - playable in the browser. 
                Try to beat my high score of 213.
                "
                skills={["Unity", "C#"]}
                skillsColor="#78b5ff"
                demo="https://nickbozentko.github.io/flappy-ball/"
            />

            <Project 
                imgSrc="/ticTacToe.png"
                name="Online Multiplayer Tic Tac Toe"
                description="
                An online multiplayer game of Tic Tac Toe. 
                Play with a friend or wait to be paired with an opponent.
                Make sure to smack talk through the in-game chat.
                "
                skills={["Node.js", "React", "Socket.io"]}
                skillsColor="#19afff"
                sourceCode="https://github.com/nickbozentko/tic-tac-toe"
                demo="https://tictactoe.nicholasbozentko.com/"
            />

            <Project 
                imgSrc="/stockGain.png"
                name="Daily Top Stock Image Maker"
                description="
                Program generates an image every day at market close creating a visual report of the highest percentage gaining stock according to Yahoo Finance data.
                "
                skills={["Python", "Matplotlib", "AWS Lambda"]}
                skillsColor="#1ad630"
            />
        </div>
    </div>
);

const Project = ({ 
    imgSrc, 
    name,
    description,
    skills,
    skillsColor,
    sourceCode,
    demo
}) => {
    let [sourceHover, setSourceHover] = useState(false);
    let [demoHover, setDemoHover] = useState(false);
    return (
    <div 
        className="project" 
        style={{ borderColor: skillsColor }}
    >
        <div className="img-container">
            <img src={imgSrc} height="100%" />
        </div>
        <div className="text">
            <div className="project-name">{name}</div>
            <div className="project-description">{description}</div>
            <div className="skills-used">
                {skills.map(skill => 
                    <SkillItem 
                        key={skill} 
                        children={skill} 
                        color={skillsColor || "#3bb2e6"}
                    />
                )}
            </div>
            <div className="links">
                {sourceCode && 
                    <a 
                        className="link source" 
                        href={sourceCode} 
                        rel="noreferrer"
                        target="_blank"
                        style={{ borderColor: skillsColor || '#000000' }}
                        onMouseEnter={() => setSourceHover(true)}
                        onMouseLeave={() => setSourceHover(false)}
                    >
                        <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                        <div className={`explain-text ${!sourceHover ? 'hide' : ''}`}>Source</div>
                    </a>
                }
                {demo && 
                    <a 
                        className="link demo" 
                        href={demo} 
                        rel="noreferrer"
                        target="_blank"
                        style={{ borderColor: skillsColor || '#000000' }}
                        onMouseEnter={() => setDemoHover(true)}
                        onMouseLeave={() => setDemoHover(false)}
                    >
                        <FontAwesomeIcon icon={faServer} size="2x" />
                        <div className={`explain-text ${!demoHover ? 'hide' : ''}`}>Demo</div>
                    </a>
                }
            </div>
        </div>
    </div>);
};

Project.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    skillsColor: PropTypes.string,
    sourceCode: PropTypes.string,
    demo: PropTypes.string
}

export default Projects;