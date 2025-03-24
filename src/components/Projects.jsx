import React from 'react';
import SkillItem from './SkillItem.jsx';
import Link from './icons/Link.jsx';

const Projects = () => (
    <div className="projects-root">
        <div className="title">Check out some of my projects</div>
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
                imgSrc="/video.png"
                name="Video Speed Plugin"
                description="
                I watch nearly all video content at 1.5x or 2x speed.
                Unfortunately, not all websites provide the option to speed up video playback. 
                This simple Chrome plugin adds that feature to any website with a video player and offers more granular controls.
                Play any video in the range of 0.1x to 5x speed.
                "
                skills={["JavaScript"]}
                skillsColor="#0066f5"
                sourceCode="https://github.com/nickbozentko/video-speed-plugin"
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
    return (
        <div 
            className="project" 
            style={{ borderColor: skillsColor }}
        >
            <div className="text">
                <div className="project-name">{name}</div>
                <div className="project-description">{description}</div>
            </div>
            <div className="pic-wrapper">
               <img src={imgSrc} height="100%" className="pic" />
            </div>
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
                    ><Link height={18} width={18} />&nbsp;Source</a>
                }
                {demo && 
                    <a 
                        className="link demo" 
                        href={demo} 
                        rel="noreferrer"
                        target="_blank"
                    ><Link height={18} width={18} />&nbsp;Demo</a>
                }
            </div>
        </div>
    );
};

export default Projects;