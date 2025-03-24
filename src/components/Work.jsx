import React from 'react';
import Section from './Section.jsx';

const Work = () => (
    <Section 
        title="Work Experience" 
        className="work-root" 
        icon={null} 
        iconColor="#0f62fe"
    >
        <h1 className="company ibm">IBM</h1>

        <div className="description">
            <div>
            I am a Software Architect at IBM currently working on the Hyperscaler Center of Excellence team. 
            I joined the company in 2018 as an intern after my freshman year of college.
            </div>
        </div>

        <div className="role">
            <div className="role-name">Advisory Software Architect</div>
            <div className="time">March 2024 - Present</div>
        </div>

        <div className="role">
            <div className="role-name">Staff Software Developer</div>
            <div className="time">September 2022 - March 2024</div>
        </div>
        
        <div className="role">
            <div className="role-name">Associate Software Developer</div>
            <div className="time">June 2021 - September 2022</div>
        </div>

        <div className="role">
            <div className="role-name">Software Developer Intern</div>
            <div className="time">May 2018 - June 2021</div>
        </div>
    </Section>
)

export default Work;