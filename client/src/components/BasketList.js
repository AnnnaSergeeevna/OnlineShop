import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { Table } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import BasketItem from '../components/BasketItem'
import { fetchBasketItems } from '../http/basketAPI';

const BasketList = observer(() => {
    const { basket } = useContext(Context);
    const [items, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const basketId = basket.getBasketId()
                const data = await fetchBasketItems(basketId);
                const processedData = processBasketItems(data);
                setItem(processedData);

            } catch (error) {
                console.error('Error fetching basket items:', error);
            }
        };
        fetchData();
    }, [basket]);

    const processBasketItems = (basketItems) => {
        const processedData = [];
        basketItems.forEach((basketItem) => {
            const item = basketItem.item;
            const existingItem = processedData.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
                existingItem.basketIds.push(basketItem.id)
            } else {
                processedData.push({
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    basketIds: [basketItem.id]
                });
            }
        });
        return processedData;
    };

    return (
        <Table bordered hover size="sm" className="mt-3">
            <thead>
                <tr className='align-items-center' >
                    <th style={{ width: 120 }}>Image</th>
                    <th>Name</th>
                    <th>Price, €</th>
                    <th>-</th>
                    <th>Quantity</th>
                    <th>+</th>
                    <th>Amount, €</th>
                </tr>
            </thead>
            <tbody>

                {items.map(item => <BasketItem key={item.id} item={item} />)}
            </tbody>
        </Table>
    );
});

export default BasketList;


