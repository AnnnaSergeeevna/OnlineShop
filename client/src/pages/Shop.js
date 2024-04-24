import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import '../Bootstrap.css';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import BrandBar from '../components/BrandBar';
import ItemList from '../components/ItemList';
import { fetchBrands, fetchItems, fetchTypes } from '../http/itemAPI';



const Shop = observer(() => {
    const { item } = useContext(Context);
    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems().then(data => item.setItems(data.rows))
    }, [])
    return (<>
        <Container>
            <Row>
                <Col md={3}><TypeBar /></Col>
                <Col md={9}><BrandBar /><ItemList /></Col>
            </Row>
        </Container>

    </>);
})
export default Shop;