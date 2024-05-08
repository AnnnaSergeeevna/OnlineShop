import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Card, Image, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { ITEM_ROUTE } from '../utils/consts';
import { item } from '../store/ItemStore';
import { addItemToBasket, removeItemFromBasket } from '../http/basketAPI';


const BasketItem = ({ basketItem }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(basketItem.quantity);
    const { basket } = useContext(Context);

    function handlePlusQuantity() {
        setQuantity(quantity + 1);
        addItemToBasket(basket.getBasketId(), basketItem.id)
    }
    function handleMinusQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            removeItemFromBasket(basketItem.id)
        }
    }

    return (
        <tr className='align-items-center justify-content-center'>
            <td><Image src={process.env.REACT_APP_API_URL + basketItem.img} style={{ width: '50px', height: '50px' }} /></td>
            <td>{basketItem.name}</td>
            <td>{basketItem.price} €</td>
            <td><button
                className="outline-plus-minus-btn m-2"
                onClick={handleMinusQuantity}
            >-</button></td>
            <td>{quantity}</td>
            <td><button
                className="outline-plus-minus-btn m-2"
                onClick={handlePlusQuantity}
            >+</button></td>
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


