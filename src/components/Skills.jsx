import React from 'react';
import SkillItem from './SkillItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode,
    faGlobe,
    faCloud,
    faDatabase,
    faCommentDots
} from '@fortawesome/free-solid-svg-icons';

let skills = [
    {
        category: 'Programming Languages',
        items: [
            'Python', 
            'JavaScript', 
            'TypeScript', 
            'SQL', 
            'Swift', 
            'Java'
        ],
        color: '#ed0c26',
        icon: faCode
    },
    {
        category: 'Web',
        items: [
            'React', 
            'Node.js/Express.js', 
            'HTML', 
            'CSS/SCSS'
        ],
        color: '#1fff4c',
        icon: faGlobe
    },
    {
        category: 'Cloud',
        items: [
            'AWS (EC2, S3, Lambda, Amplify, ECR)', 
            'IBM Cloud', 
            'Firebase', 
            'Docker'
        ],
        color: '#1fbcff',
        icon: faCloud
    },
    {
        category: 'Databases',
        items: [
            'MySQL', 
            'Db2', 
            'MongoDB', 
            'Redis'
        ],
        color: '#ffd21f',
        icon: faDatabase
    }, 
    {
        category: 'Miscellaneous',
        items: [
            'Version Control (Git/GitHub)', 
            'Unity', 
            'Agile Methodologies', 
            'LaTeX'
        ],
        color: '#e91fff',
        icon: faCommentDots
    }
];

let skillsComponent = skills.map(skill => (
    <div 
        key={skill.category} 
        className="group" 
        style={{ borderRight: `3px solid ${skill.color}` }}
    >
        <div className="category-title">
            <span 
                className="category-title-icon"
                style={{ color: skill.color || '#ffffff' }}
            >
                <FontAwesomeIcon icon={skill.icon} />
            </span>
            <span className="category-title-text">
                {skill.category}
            </span>
            
        </div>
        <div className="items">
            {skill.items.map(item => (
                <SkillItem 
                    color={skill.color}
                    key={item} 
                    children={item} 
                />
            ))}
        </div>
    </div>
));

const Skills = () => (
    <div className="skills-root">
        <div className="title">Skills</div>
        <div className="skills-holder">
            {skillsComponent}
        </div>
    </div>
);

export default Skills;