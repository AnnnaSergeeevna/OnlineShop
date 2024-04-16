import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../../Bootstrap.css';

export function CreateTypeModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control placeholder={'Add Type Name'} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn1 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={props.onHide}>
                        Close
                    </Button>
                    <Button className="primary-btn2 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={props.onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateTypeModal;

