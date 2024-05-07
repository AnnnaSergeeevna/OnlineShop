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
        <tr>
            <td><Image src={process.env.REACT_APP_API_URL + basketItem.item.img} style={{ width: '50px', height: '50px' }} /></td>
            <td>{basketItem.item.name}</td>
            <td>{basketItem.item.price} €</td>
            <td>{basketItem.item.price} €</td>
            <td>{basketItem.item.price} €</td>
            <td><button onClick={() => navigate(`${ITEM_ROUTE}/${basketItem.item.id}`)}>Details</button></td>
        </tr>
    );
}

export default BasketItem;


