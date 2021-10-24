import React from 'react';
import Section from './Section.jsx';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => (
    <Section 
        title="Education" 
        className="education-root" 
        icon={faGraduationCap} 
        iconColor="#800c25"
    >
        <h1 className="school">
            <span className="iona">Iona </span>
            <span className="college">College</span>
        </h1>

        <div className="item">
            <span className="key">Major: </span>
            <span className="value">Computer Science</span>
        </div>
        <div className="item">
            <span className="key">Minor: </span>
            <span className="value">Mathematics</span>
        </div>
        <div className="item">
            <span className="key">GPA: </span>
            <span className="value">4.0 / 4.0, Summa Cum Laude</span>
        </div>
        <div className="item">
            <span className="key">Degree: </span>
            <span className="value">Bachelor of Science</span>
        </div>
        <div className="item">
            <span className="key">Graduation Date: </span>
            <span className="value">May 2021</span>
        </div>
        <div className="item">
            <span className="key">Extracurriculars: </span>
            <span className="value">Student President of the Computer Science Club</span>
        </div>
        <div className="item">
            <span className="key">Honors: </span>
            <span className="value honors-list">
                <div className="society-name">Upsilon Pi Epsilon</div>
                <div className="society-description">Honor Society for the Computing and Information Disciplines</div>
                <div className="society-name">Pi Mu Epsilon</div>
                <div className="society-description">Honorary National Mathematics Society</div>
                <div className="society-name">Delta Epsilon Sigma</div>
                <div className="society-description">National Scholastic Honor Society for Students of Catholic Colleges</div>
            </span>
        </div>
    </Section>
);

export default Education;