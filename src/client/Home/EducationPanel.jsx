import React, { useState } from 'react';
import * as firebase from 'firebase/app';

import ionaLogo from '../../../public/images/ionaLogo.svg';
import Panel from '../general/Panel.jsx';
import ClassesModal from '../general/ClassesModal.jsx';

const EducationPanel = props => {
    const [showClasses, setShowClasses] = useState(false);
    const [courseBtnIsFocused, setCourseBtnIsFocused] = useState(false);

    const handleClassesClose = () => setShowClasses(false);
    const handleClassesOpen = () => { 
        setShowClasses(true);
        firebase.analytics().logEvent('courses_opened');
    };

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
                        </span> Bachelor of Science in Computer Science with Minor in Mathematics
                    </div>
                    
                    <hr />
                    
                    <div style={{ fontFamily: 'Roboto Mono' }}>
                        <span style={{ fontWeight: 'bold' }}>
                            GPA: 
                        </span> 4.0
                        <br/>
                        <span style={{ fontWeight: 'bold' }}>
                            Dean's List: 
                        </span> Six consecutive semesters 
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
                            maxHeight: '375px',
                            maxWidth: '100%'
                        }}
                    />
                </div>


                <button
                    onClick={handleClassesOpen}
                    style={{ 
                        borderRadius: '0px', 
                        backgroundColor: courseBtnIsFocused ? '#a32133' : '#8A2432',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        width: '30%',
                        minWidth: '200px',
                        transition: '0.12s'
                    }}
                    onMouseEnter={() => setCourseBtnIsFocused(true)}
                    onMouseLeave={() => setCourseBtnIsFocused(false)}
                >
                    View Courses
                </button>
                <ClassesModal 
                    show={showClasses}
                    handleClose={handleClassesClose}
                />
            </div>
        </Panel>
    );
}

export default EducationPanel;