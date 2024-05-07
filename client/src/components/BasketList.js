import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { Card, ListGroup, Table } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import BasketItem from '../components/BasketItem'
import { fetchBasketItems } from '../http/basketAPI';

const BasketList = observer(() => {
    const { basket } = useContext(Context);
    // const { basketId } = useParams();
    const [basketItems, setBasketItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const basketId = basket.getBasketId()
                const data = await fetchBasketItems(basketId);
                setBasketItem(data);
                basket.setBasketItems(data);
                console.log(data)

            } catch (error) {
                console.error('Error fetching basket items:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Table bordered hover size="sm" className="mt-3">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price, €</th>
                    <th>Quantity</th>
                    <th>Amount, €</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>

                {basketItems.map(basketItem => <BasketItem key={basketItem.id} basketItem={basketItem} />)}
            </tbody>
        </Table>
    );
});

export default BasketList;

{/* {basket ? (
                <Table bordered hover size="sm" className="mt-3">
                    <thead>
                        <tr style={{ fontFamily: 'Poiret One' }}>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket._basketItems.map(basketItem => <Card key={basketItems.id} item={basketItem}/>)}
                        {/* <tr>
                            <th colSpan="3">Total</th>
                            <th>{basket.BasketItemsTotalCost}</th>
                            <th>Euro</th>
                        </tr> */}
//     </tbody>
//     </Table>
// ) : (
//     <p>Basket is empty</p>
// )}




