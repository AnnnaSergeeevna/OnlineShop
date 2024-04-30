import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import '../Bootstrap.scss';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import BrandBar from '../components/BrandBar';
import ItemList from '../components/ItemList';
import { fetchBrands, fetchItems, fetchTypes } from '../http/itemAPI';
import Pages from '../components/Pages';



const Shop = observer(() => {
    const { item } = useContext(Context);
    useEffect(() => {
        fetchTypes().then(data => item.setTypes(data))
        fetchBrands().then(data => item.setBrands(data))
        fetchItems(null, null, 1, 6).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 6).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType, item.selectedBrand])

    return (<>
        <Container>
            <Row>
                <Col md={3}><TypeBar /></Col>
                <Col md={9}>
                    <BrandBar />
                    <ItemList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    </>);
})
export default Shop;