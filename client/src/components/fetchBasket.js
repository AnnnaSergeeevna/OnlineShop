import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { Spinner } from 'react-bootstrap'
import { fetchBasket, fetchBasketItems } from '../http/basketAPI';


const FetchBasket = (props) => {
    const { basket } = useContext(Context)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetchBasketItems()
            .then(
                data => basket.products = data.products
            )
            .finally(
                () => setFetching(false)
            )
    }, [])

    if (fetching) {
        return <Spinner animation="border" variant="light" />
    }

    return props.children
}

export default FetchBasket