import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Card, Image, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { ITEM_ROUTE } from '../utils/consts';
import { item } from '../store/ItemStore';


const BasketItem = ({ basketItem }) => {
    const navigate = useNavigate();

    return (
        <tr className='align-items-center justify-content-center'>
            <td><Image src={process.env.REACT_APP_API_URL + basketItem.img} style={{ width: '50px', height: '50px' }} /></td>
            <td>{basketItem.name}</td>
            <td>{basketItem.price} €</td>
            <td>{basketItem.quantity}</td>
            <td>{basketItem.totalPrice} €</td>
            <td>
                <button className="primary-btn1 m-2"
                    style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }}
                    variant="outline-primary"
                    onClick={() => navigate(`${ITEM_ROUTE}/${basketItem.id}`)}>
                    Details
                </button>
            </td>
        </tr>
    );
}

export default BasketItem;


