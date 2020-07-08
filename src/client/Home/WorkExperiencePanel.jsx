import React from 'react';

import ibmLogo from '../../../public/images/ibm.png';
import Panel from '../general/Panel.jsx';

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
                <div>
                    <img 
                        src={ibmLogo} 
                        alt="IBM Logo" 
                        style={{ 
                            objectFit: 'scale-down',
                            verticalAlign: 'center',
                            maxHeight: '100%',
                            maxWidth: '100%'
                        }}
                    />
                </div>
            </div>

            <p>
                I have been with IBM since May of 2018, working full-time during the summers and part-time while classes are in session.
            </p>
            <p>
                My role at IBM involves modernizing the internal software portfolio of IBM Global Financing. 
                To this end, I have developed and deployed scalable, cloud-ready applications that are utilized worldwide by members of the IBM Global Financing community.
                My team uses agile methodologies to continuously deliver improvements and quickly respond to feedback. 
            </p>
            <div>
                Some of the technologies I have worked with include
                <ul>
                    <li>Node.js / Express.js</li>
                    <li>React</li>
                    <li>HTML5 / CSS3 / JavaScript</li>
                    <li>SQL</li>
                    <li>IBM Db2</li>
                    <li>Docker</li>
                    <li>RedHat Openshift</li>
                    <li>Redis</li>
                    <li>IBM Cloud Services</li>
                    <li>Git / Github</li>
                </ul>
            </div>
        </Panel>
    );
}

export default WorkExperiencePanel;