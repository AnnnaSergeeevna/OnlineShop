import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Container, ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { basket } from '../store/BasketStore';
import { fetchBasketItems } from '../http/basketAPI';
import BasketList from '../components/BasketList'

const Basket = observer(() => {
    const { basket } = useContext(Context);
    const basketItems = basket.getBasketItems();

    return (
        <Container>
            <h1 style={{ fontFamily: 'Poiret One' }}>Basket</h1 >
            <BasketList />
        </Container>
    )



});

export default Basket;


{/* <h1 style={{ fontFamily: 'Poiret One' }}>{ }Card</h1>
        <ListGroup as="ul" className='cardGroup'>
            {item.types.map(type =>
                <ListGroup.Item
                    active={type.id === item.selectedType.id}
                    className={`card-group-item ${type.id === item.selectedType.id ? `active-${type.id}` : ''}`}
                    onClick={() => {
                        item.setSelectedType(type)
                    }}
                    key={type.id} id={type.id}>
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup> */}