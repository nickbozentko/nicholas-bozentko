import React from 'react';

import ibmLogo from '../../../public/images/ibm.png';
import Panel from '../general/Panel.jsx';
import SkillItem from '../general/SkillItem.jsx';

const WorkExperiencePanel = props => {
    return(
        <Panel className="home-half-panel">

            <div style={{ display: 'grid', gridTemplateColumns: '7fr 4fr'}}>
                <div>
                    <h2>Work Experience</h2>
                    <h3>IBM</h3>

                    <hr />

                    <div style={{ fontFamily: 'Roboto Mono' }}>Software Developer Intern</div>

                    <hr />

                    <div style={{ fontFamily: 'Roboto Mono', fontWeight: '300' }}>May 2018 - Present</div>
                    <div style={{ fontFamily: 'Roboto Mono', fontWeight: '300' }}>Armonk, New York</div>

                    <hr />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                        src={ibmLogo} 
                        alt="IBM Logo" 
                        style={{ 
                            objectFit: 'scale-down',
                            verticalAlign: 'middle',
                            maxHeight: '275px',
                            maxWidth: '100%',
                        }}
                    />
                </div>
            </div>

            <p>
                I have been with IBM since May of 2018, working full-time during the summers and part-time while classes are in session.
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
                <SkillItem color="#1F70C1">Docker</SkillItem>
                <SkillItem color="#1F70C1">RedHat Openshift</SkillItem>
                <SkillItem color="#1F70C1">Redis</SkillItem>
                <SkillItem color="#1F70C1">IBM Cloud Services</SkillItem>
                <SkillItem color="#1F70C1">Git / GitHub</SkillItem>
            </div>
        </Panel>
    );
}

export default WorkExperiencePanel;