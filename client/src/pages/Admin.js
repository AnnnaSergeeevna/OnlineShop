import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreateTypeModal } from '../components/Modals/CreateTypeModal';
import { CreateBrandModal } from '../components/Modals/CreateBrandModal';
import CreateItemModal from '../components/Modals/CreateItemModal';
import '../Bootstrap.css';

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);

    return (
        <Container className='d-flex flex-column align-items-center'>
            <Button className="primary-btn1 m-2" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)', width: 300 }} variant="outline-primary"
                onClick={() => setTypeVisible(true)}>
                Add Type
            </Button>
            <Button className="primary-btn1 m-2" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)', width: 300 }} variant="outline-primary"
                onClick={() => setBrandVisible(true)}>

                Add Brand
            </Button>
            <Button className="primary-btn1 m-2" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)', width: 300 }} variant="outline-primary"
                onClick={() => setItemVisible(true)}>

                Add Item
            </Button>
            <CreateTypeModal show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateBrandModal show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateItemModal show={itemVisible} onHide={() => setItemVisible(false)} />

        </Container >
    );
}
export default Admin;