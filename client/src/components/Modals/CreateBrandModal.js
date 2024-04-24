import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../../Bootstrap.css';
import { createBrand } from '../../http/itemAPI';

export function CreateBrandModal({ show, onHide }) {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({
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
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={'Add Brand Name'} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn1 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={onHide}>
                        Close
                    </Button>
                    <Button className="primary-btn2 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={addBrand}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateBrandModal;

