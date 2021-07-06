import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase/app'

import Panel from '../general/Panel.jsx';
import dockerBadgeImg from '../../../public/images/dockerBadge.png';
import blockchainBadgeImg from '../../../public/images/blockchainBadge.png';
import agileBadgeImg from '../../../public/images/agileBadge.png';
import kubeBadgeImg from '../../../public/images/kubeBadge.png';
import dataPyBadgeImg from '../../../public/images/dataPyBadge.png';
import istioBadgeImg from '../../../public/images/istioBadge.png';
import upeImg from '../../../public/images/upe.png';


const dockerBadgeLink = 'https://www.youracclaim.com/badges/b7a5f7d1-25dd-4a57-b703-93560d69a10b/';
const blockchainBadgeLink = 'https://www.youracclaim.com/badges/742e5111-3d70-4153-9bc7-a16554388934/';
const kubeBadgeLink = 'https://www.youracclaim.com/badges/240a55dd-c96b-4faa-99dc-1f1252019bfe/';
const agileBadgeLink = 'https://www.youracclaim.com/badges/3848964d-10a8-4a53-a577-ee539d73db55/';
const dataPyBadgeLink = 'https://www.youracclaim.com/badges/39f6fc1b-bf12-4672-9042-65553b03989a/';
const istioBadgeLink = 'https://www.youracclaim.com/badges/f6d51bf7-ceab-49f0-ac6f-fe0ed186c1b3/';


const CredentialsPanel = props => {
    return(
        <Panel className="home-half-panel">
            <h2>Badges</h2>
            <Row>
                <Col 
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={dockerBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(dockerBadgeLink, '_blank');
                                firebase.analytics().logEvent('docker_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>Docker Essentials: A Developer Introduction</div>
                    </Panel>
                </Col>
                <Col 
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={dataPyBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(dataPyBadgeLink, '_blank');
                                firebase.analytics().logEvent('data_py_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>Data Analysis Using Python</div>
                    </Panel>
                </Col>
                <Col 
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={blockchainBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(blockchainBadgeLink, '_blank');
                                firebase.analytics().logEvent('blockchain_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>IBM Blockchain Essentials</div>
                    </Panel>
                </Col>
                <Col 
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={agileBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(agileBadgeLink, '_blank');
                                firebase.analytics().logEvent('agile_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>IBM Agile Explorer</div>
                    </Panel>
                </Col>
                <Col
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={kubeBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(kubeBadgeLink, '_blank');
                                firebase.analytics().logEvent('kube_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>IBM Cloud Kubernetes Service</div>
                    </Panel>
                </Col>
                <Col
                    sm={6} xl={4} 
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Panel style={{ flex: '1', marginBottom: '5px', borderRadius: '10px', marginLeft: '0px', marginRight: '0px' }}>
                        <img
                            src={istioBadgeImg}
                            style={{ margin: 'auto', display: 'block', cursor: 'pointer', maxHeight: '150px', maxWidth: '100%' }}
                            onClick={() => {
                                window.open(istioBadgeLink, '_blank');
                                firebase.analytics().logEvent('istio_badge_click')
                            }}
                            className="sizeOnHover"
                        />
                        <div style={{ textAlign: 'center' }}>Getting started with Microservices with Istio</div>
                    </Panel>
                </Col>
            </Row>
        </Panel>
    )
}

export default CredentialsPanel;
