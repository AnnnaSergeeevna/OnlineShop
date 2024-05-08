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
    const [basketItems, setBasketItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const basketId = basket.getBasketId()
                const data = await fetchBasketItems(basketId);
                const processedData = processBasketItems(data);
                setBasketItem(processedData);
                basket.setBasketItems(processedData);
            } catch (error) {
                console.error('Error fetching basket items:', error);
            }
        };
        fetchData();
    }, [basket]);

    const processBasketItems = (data) => {
        const processedData = [];
        data.forEach((basket) => {
            const item = basket.item;
            const existingItem = processedData.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
            } else {
                processedData.push({
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                });
            }
        });
        return processedData;
    };

    return (
        <Table bordered hover size="sm" className="mt-3">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price, €</th>
                    <th>-</th>
                    <th>Quantity</th>
                    <th>+</th>
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


