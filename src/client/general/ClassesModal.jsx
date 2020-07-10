import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import SemestersList from './SemestersList';

const ClassesModal = props => {
    let {
        show,
        handleClose
    } = props;

    const [closeBtnIsFocused, setCloseBtnIsFocused] = useState(false);

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
                    onMouseEnter={() => setCloseBtnIsFocused(true)}
                    onMouseLeave={() => setCloseBtnIsFocused(false)}
                    style={{ 
                        borderRadius: '0px', 
                        backgroundColor: closeBtnIsFocused ? '#808080' : '#999999',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        transition: '0.12s'
                    }}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ClassesModal;