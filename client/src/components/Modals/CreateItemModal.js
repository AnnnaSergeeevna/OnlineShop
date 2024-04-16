import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../index';
import { Button, Modal, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Bootstrap.css';

export function CreateItemModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { item } = useContext(Context);
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    return (
        <>

            <Modal show={props.show} onHide={props.onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Dropdown title="Dropdown" id="basic-nav-dropdown" className='mt-2'>
                            <DropdownToggle style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}>Choose Type</DropdownToggle>
                            <DropdownMenu>
                                {item.types.map(type =>
                                    <DropdownItem key={type.id}>{type.name}</DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className='mt-2'>
                            <DropdownToggle style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}>Choose Brand</DropdownToggle>
                            <DropdownMenu>
                                {item.brands.map(brand =>
                                    <DropdownItem key={brand.id}>{brand.name}</DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>
                        <Form className='mt-2'>
                            <Form.Control placeholder={'Add Item Name'} />
                        </Form>
                        <Form className='mt-2'>
                            <Form.Control placeholder={'Add Price'} type='number' />
                        </Form>
                        <Form className='mt-2'>
                            <Form.Control type='file' />
                            <Button className="mt-4 mb-2"
                                variant='primary' style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}
                                onClick={addInfo}>
                                Add New Item
                            </Button>
                            {info.map(i =>
                                <Row className='mt-2' key={i.number}>
                                    <Col md={4}>
                                        <Form.Control placeholder='Add Item Name' />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control placeholder='Add Item Description' />
                                    </Col>
                                    <Col md={4}>
                                        <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Delete Item</Button>
                                    </Col>
                                </Row>)}
                        </Form>
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

export default CreateItemModal;


