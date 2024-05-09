import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Card, Image, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { ITEM_ROUTE } from '../utils/consts';
import { item } from '../store/ItemStore';
import { addItemToBasket, removeItemFromBasket } from '../http/basketAPI';


const BasketItem = ({ item }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(item.quantity);
    const [amount, setAmount] = useState(item.totalPrice)
    const { basket } = useContext(Context);

    function handlePlusQuantity() {
        setQuantity(quantity + 1);
        setAmount(amount + item.totalPrice)
        addItemToBasket(basket.getBasketId(), item.id)
    }
    function handleMinusQuantity() {
        if (quantity > 0 || item.basketIds.length > 0) {
            setQuantity(quantity - 1)
            setAmount(amount - item.price)
            removeItemFromBasket(item.basketIds.shift())
        }
    }

    return (
        <tr className='align-items-center justify-content-center'>
            <td><Image src={process.env.REACT_APP_API_URL + item.img} style={{ width: '70px', height: '70px' }} />

                <Button className="primary-btn1" style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)', width: 100, height: 40 }} variant="outline-primary"
                    onClick={() => navigate(`${ITEM_ROUTE}/${item.id}`)}>
                    Details
                </Button>
            </td>
            <td>{item.name}
            </td>
            <td className='d-flex justify-content-center'>{item.price} €</td>
            <td><button
                className="outline-plus-minus-btn m-2"
                onClick={handleMinusQuantity}
            >-</button></td>
            <td>{quantity}</td>
            <td><button
                className="outline-plus-minus-btn m-2"
                onClick={handlePlusQuantity}
            >+</button></td>
            <td>{amount} €</td>
        </tr>
    );
}

export default BasketItem;


