import React from 'react';

import ibmLogo from '../../../public/images/ibm.png';
import Panel from '../general/Panel.jsx';
import SkillItem from '../general/SkillItem.jsx';

const WorkExperiencePanel = props => {
    return(
        <Panel className="home-half-panel">

            <h2>Work Experience</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '7fr 4fr'}}>
                <span>
                    <h3>IBM</h3>
                    <div style={{ fontFamily: 'Roboto Mono', fontWeight: '300' }}>Armonk, New York</div>
                </span>
                <img 
                    src={ibmLogo} 
                    alt="IBM Logo" 
                    style={{ 
                        objectFit: 'scale-down',
                        verticalAlign: 'middle',
                        maxHeight: '75px',
                        maxWidth: '100%',
                    }}
                />

            </div>

            <hr />

            <div 
                style={{ fontFamily: 'Roboto Mono', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
            >
                <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    Software Developer
                </div>
                <div 
                    style={{ fontWeight: '300', display: 'inline-block', whiteSpace: 'nowrap' }}
                >
                    June 2021 - Present
                </div>
            </div>

            <div 
                style={{ fontFamily: 'Roboto Mono', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
            >
                <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    Software Developer Intern
                </div>
                <div 
                    style={{ fontWeight: '300', display: 'inline-block', whiteSpace: 'nowrap' }}
                >
                    May 2018 - May 2021
                </div>
            </div>

            <hr />

            <p>
                I have been with IBM since May of 2018. I started as an intern and joined full time as a Software Developer after graduating in June of 2021. 
            </p>
            <p>
                My role at IBM involves modernizing the internal software portfolio of IBM Global Financing. 
                To this end, I have developed and deployed scalable web applications that are utilized worldwide by members of the IBM Global Financing community.
                My team uses agile methodologies to continuously deliver improvements and quickly respond to feedback. 
            </p>
            <p>
                The creation of these applications and systems has directly simplified processes related to outage tracking, SLA metrics, maintenance schedules, dependency information, and communication between IT and business units.
                
            </p>
            <p>
                Some of the technologies I have worked with include:
            </p>
            <div>
                <SkillItem color="#1F70C1">Node.js / Express.js</SkillItem>
                <SkillItem color="#1F70C1">React</SkillItem>
                <SkillItem color="#1F70C1">SQL</SkillItem>
                <SkillItem color="#1F70C1">IBM Db2</SkillItem>
                <SkillItem color="#1F70C1">MongoDB</SkillItem>
                <SkillItem color="#1F70C1">Redis</SkillItem>
                <SkillItem color="#1F70C1">Docker</SkillItem>
                <SkillItem color="#1F70C1">Red Hat Openshift</SkillItem>
                <SkillItem color="#1F70C1">IBM Cloud Services</SkillItem>
                <SkillItem color="#1F70C1">Git / GitHub</SkillItem>
            </div>
        </Panel>
    );
}

export default WorkExperiencePanel;