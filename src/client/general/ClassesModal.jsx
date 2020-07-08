import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import SemestersList from './SemestersList';

const ClassesModal = props => {
    let {
        show,
        handleClose
    } = props;
    return(
        <Modal 
            show={show} 
            onHide={handleClose}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>Courses I Have Taken at Iona</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SemestersList />
            </Modal.Body>
            <Modal.Footer>
                <button
                    onClick={handleClose}
                    style={{ 
                        borderRadius: '0px', 
                        backgroundColor: '#999999',
                        color: 'white',
                        border: 'none',
                        padding: '10px'
                    }}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ClassesModal;