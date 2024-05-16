import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { Spinner } from 'react-bootstrap'
import { fetchBasketItems } from '../http/basketAPI';

const FetchBasket = (props) => {
    const { basket } = useContext(Context)
    const [fetching, setFetching] = useState(true)
    const [basketId, setBasketId] = useState(null);

    useEffect(() => {
        setBasketId(basket.getBasketId());
    }, [basket.getBasketId()]);

    useEffect(() => {
        if (basketId) {
            fetchBasketItems(basketId)
                .then(data => {
                    basket.setBasketItems(data);
                    console.log(data)
                    setFetching(false);
                })
                .catch(error => {
                    console.error("Error fetching basket items:", error);
                    setFetching(false);
                });
        }
    }, [basketId, basket]);

    return props.children
}

export default FetchBasket

