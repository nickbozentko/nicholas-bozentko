import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Panel from '../general/Panel.jsx';
import dockerBadgeImg from '../../../public/images/dockerBadge.png';
import blockchainBadgeImg from '../../../public/images/blockchainBadge.png';
import agileBadgeImg from '../../../public/images/agileBadge.png';
import kubeBadgeImg from '../../../public/images/kubeBadge.png';

const dockerBadgeLink = 'https://www.youracclaim.com/badges/b7a5f7d1-25dd-4a57-b703-93560d69a10b/';
const blockchainBadgeLink = 'https://www.youracclaim.com/badges/742e5111-3d70-4153-9bc7-a16554388934/';
const kubeBadgeLink = 'https://www.youracclaim.com/badges/240a55dd-c96b-4faa-99dc-1f1252019bfe/';
const agileBadgeLink = 'https://www.youracclaim.com/badges/3848964d-10a8-4a53-a577-ee539d73db55/';


const CredentialsPanel = props => {
    return(
        <Panel className="home-half-panel">
            <h2>Honors and Certifications</h2>

            <Panel>
                <h2>Upsilon Pi Epsilon</h2>
            </Panel>

            <Row>
                <Col 
                    sm 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1' }}>
                        <img
                            src={dockerBadgeImg}
                            height='150px'
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer' }}
                            onClick={() => window.open(dockerBadgeLink, '_blank')}
                        />
                        <div style={{ textAlign: 'center' }}>Docker Essentials: A Developer Intoduction</div>
                    </Panel>
                </Col>
                <Col 
                    sm 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1' }}>
                        <img
                            src={blockchainBadgeImg}
                            height='150px'
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer' }}
                            onClick={() => window.open(blockchainBadgeLink, '_blank')}
                        />
                        <div style={{ textAlign: 'center' }}>IBM Blockchain Essentials</div>
                    </Panel>
                </Col>
            </Row>

            <Row>
                <Col 
                    sm 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1' }}>
                        <img
                            src={kubeBadgeImg}
                            height='150px'
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer' }}
                            onClick={() => window.open(kubeBadgeLink, '_blank')}
                        />
                        <div style={{ textAlign: 'center' }}>IBM Cloud Kubernetes Service</div>
                    </Panel>
                </Col>
                <Col 
                    sm 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1' }}>
                        <img
                            src={agileBadgeImg}
                            height='150px'
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer' }}
                            onClick={() => window.open(agileBadgeLink, '_blank')}
                        />
                        <div style={{ textAlign: 'center' }}>IBM Agile Explorer</div>
                    </Panel>
                </Col>
            </Row>

        </Panel>
    )
}

export default CredentialsPanel;