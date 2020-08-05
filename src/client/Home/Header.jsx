import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase/app';

import nickLogo from '../../../public/images/nickLogo.svg';


const Header = props => {
    let {
        collapseWidth,
        windowWidth
    } = props;

    let [linkedinFocused, setLinkedinFocused] = useState(false);
    let [githubFocused, setGithubFocused] = useState(false);

    return(
        <Row>
            <Col md style={{ display: 'flex' }}>
                <div style={{ margin: windowWidth > collapseWidth ? '' : '0 auto' }}>
                    <img
                        src={nickLogo}
                        height="130px"
                        width="130px"
                        style={{  
                            margin: '10px 25px 0 25px', 
                            position: 'relative', 
                            float: 'left' 
                        }}
                    />
                    <span style={{ display: 'flex', height: '100%' }}>
                        <div style={{ margin: 'auto 0' }}>
                            <h1 
                                style={{ 
                                    fontSize: '45px',
                                }}
                            >
                                Hi, I'm Nick. 
                            </h1>
                            <span 
                                style={{ 
                                    fontSize: '20px', 
                                    color: 'gray',
                                }}
                            > Here's a little bit about me.
                            </span>
                        </div>
                    </span>
                </div>
            </Col>
            <Col md={4}>
                <div
                    style={{ 
                        position: 'relative', 
                        float: windowWidth > collapseWidth ? 'right' : '', 
                        height: '100%', 
                        display: 'flex' 
                    }}
                >
                    <div style={{ margin: windowWidth > collapseWidth ? 'auto 0' : 'auto auto' }}>
                        <h2>Contact Me</h2>
                        <div style={{ textAlign: 'center' }}>
                            <i 
                                className="fab fa-github" 
                                style={{ 
                                    color: githubFocused ? '#000000' : '#333333',
                                    marginRight: '10px',
                                    fontSize: '40px',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setGithubFocused(true)}
                                onMouseLeave={() => setGithubFocused(false)}
                                onClick={() => {
                                    window.open('https://github.com/nickbozentko', '_blank');
                                    firebase.analytics().logEvent('github_click');
                                }}
                            />
                            <i 
                                className="fab fa-linkedin" 
                                style={{ 
                                    color: linkedinFocused ?  '#065e8f' : '#0072b1',
                                    marginRight: '10px',
                                    fontSize: '40px',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => setLinkedinFocused(true)}
                                onMouseLeave={() => setLinkedinFocused(false)}
                                onClick={() => {
                                    window.open('https://www.linkedin.com/in/nicholas-bozentko/', '_blank');
                                    firebase.analytics().logEvent('linkedin_click');
                                }}
                            />
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    );
}

export default Header;