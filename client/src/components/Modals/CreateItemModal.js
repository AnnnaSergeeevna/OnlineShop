import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { Button, Modal, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Bootstrap.css';
import { createItem, fetchBrands, fetchTypes } from '../../http/itemAPI';

export const CreateItemModal = observer(({ show, onHide }) => {
    const { item } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const selectFile = (e => {
        setFile(e.target.files[0])
    })

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', item.selectedType.id)
        formData.append('brandId', item.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => onHide())
    }

    return (
        <>
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>


                        <Dropdown title="Dropdown" id="basic-nav-dropdown" className='mt-2'>
                            <DropdownToggle style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}>

                                {item.selectedType.name ? item.selectedType.name : 'Choose Type'}</DropdownToggle>

                            <DropdownMenu>
                                {item.types.map(type =>
                                    <DropdownItem
                                        onClick={() => item.setSelectedType(type)}
                                        key={type.id}>
                                        {type.name}
                                    </DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown className='mt-2'>
                            <DropdownToggle style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}>
                                {item.selectedBrand.name ? item.selectedBrand.name : 'Choose Brand'}</DropdownToggle>
                            <DropdownMenu>
                                {item.brands.map(brand =>
                                    <DropdownItem
                                        onClick={() => item.setSelectedBrand(brand)}
                                        key={brand.id}>
                                        {brand.name}
                                    </DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>


                        <Form className='mt-2'>
                            <Form.Control
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder={'Add Item Name'} />
                        </Form>
                        <Form className='mt-2'>
                            <Form.Control
                                value={price}
                                onChange={e => setPrice(Number(e.target.value))}
                                placeholder={'Add Price'} type='number' />
                        </Form>
                        <Form className='mt-2'>
                            <Form.Control type='file' onChange={selectFile} />


                            <Button className="mt-4 mb-2"
                                variant='primary'
                                style={{ borderColor: 'var(--bs-4)', backgroundColor: 'var(--bs-4)', color: 'white' }}
                                onClick={addInfo}>
                                Add New Property
                            </Button>

                            {info.map(i =>
                                <Row className='mt-2' key={i.number}>
                                    <Col md={4}>
                                        <Form.Control
                                            value={i.title}
                                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                            placeholder='Add Property Name' />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control
                                            value={i.description}
                                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                            className='mt-2'
                                            placeholder='Add Property Description' />
                                    </Col>
                                    <Col md={4}>
                                        <Button variant='outline-danger' className='mt-2' onClick={() => removeInfo(i.number)}>Delete Property</Button>
                                    </Col>
                                </Row>)}
                        </Form>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn1 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={onHide}>
                        Close
                    </Button>
                    <Button className="primary-btn2 m-2" variant="outline-primary" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }} onClick={addItem}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
})

export default CreateItemModal;


