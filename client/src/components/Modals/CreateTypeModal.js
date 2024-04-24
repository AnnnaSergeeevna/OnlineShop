import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../../Bootstrap.css';
import { createType } from '../../http/itemAPI';

export function CreateTypeModal({ show, onHide }) {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({
            name: value
        }).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={'Add Type Name'}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn1 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={onHide}>
                        Close
                    </Button>
                    <Button className="primary-btn2 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={addType}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateTypeModal;

