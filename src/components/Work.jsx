import React from 'react';
import Section from './Section.jsx';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Work = () => (
    <Section 
        title="Work Experience" 
        className="work-root" 
        icon={faLaptopCode} 
        iconColor="#0f62fe"
    >
        <h1 className="company ibm">IBM</h1>
        <div className="role">
            <div className="role-name">Software Developer</div>
            <div className="time">June 2021 - Present</div>
        </div>

        <div className="role">
            <div className="role-name">Software Developer Intern</div>
            <div className="time">May 2018 - June 2021</div>
        </div>

        <div className="description">
            My primary role at IBM involves creating internal tools and systems that boost the productivity of IBMers through automation and process simplification.
            In my role, I've led the successful development and deployment of multiple internal web applications.
            My responsibilties include the design, development, deployment, testing, and maintenance of these applications.
        </div>
    </Section>
)

export default Work;