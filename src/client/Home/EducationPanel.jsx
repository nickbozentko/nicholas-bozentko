import React from 'react';

import ionaLogo from '../../../public/images/iona.png';
import Panel from '../general/Panel.jsx';
import SemestersList from './SemestersList.jsx';

const EducationPanel = props => {
    return(
        <Panel className="home-half-panel">

            <div style={{ display: 'grid', gridTemplateColumns: '7fr 4fr'}}>
                <div>
                    <h2>Education</h2>
                    <h3>Iona College</h3>

                    <hr />

                    <div style={{ fontFamily: 'Roboto Mono' }}>
                        <span style={{ fontWeight: 'bold' }}>
                            Intended Degree: 
                        </span> B.S. in Computer Science with Mathematics Minor
                    </div>
                    
                    <hr />
                    
                    <div style={{ fontFamily: 'Roboto Mono' }}>
                        <span style={{ fontWeight: 'bold' }}>
                            GPA: 
                        </span> 4.0
                    </div>

                    <hr/>

                    <div style={{ fontFamily: 'Roboto Mono', fontWeight: '300' }}>August 2017 - May 2021 (Expected)</div>
                    <div style={{ fontFamily: 'Roboto Mono', fontWeight: '300' }}>New Rochelle, New York</div>

                    <hr />

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                        src={ionaLogo} 
                        alt="Iona College Logo" 
                        style={{ 
                            objectFit: 'scale-down',
                            verticalAlign: 'center',
                            maxHeight: '100%',
                            maxWidth: '100%'
                        }}
                    />
                </div>
            </div>

            <SemestersList />
        </Panel>
    );
}

export default EducationPanel;