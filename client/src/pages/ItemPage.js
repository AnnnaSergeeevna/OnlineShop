import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row, Card, Image, Button } from 'react-bootstrap';
import star from './../assets/Black_star.svg.png';
import '../Bootstrap.scss';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../http/itemAPI';
import { Context } from '../index';
import { addItemToBasket } from '../http/basketAPI';


const ItemPage = observer(() => {
    const { basket, user } = useContext(Context);
    const { id } = useParams()
    const [item, setItem] = useState({ info: [] });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const fetchItemData = async () => {
            const data = await fetchItem(id);
            setItem(data);
            const basketId = basket.getBasketId();
            if (basketId) {
                basket.setBasketId(basketId);
            } else {
                console.error('BasketId is not available.');
            }
        };
        fetchItemData();
    }, [basket, id]);

    const handleClick = async () => {
        const basketId = basket.getBasketId();
        const itemId = item.id
        if (basketId) {
            try {
                await addItemToBasket(basketId, itemId);
                setIsActive(true);
            } catch (error) {
                console.error('Error adding item to basket:', error);
            } finally {
                setIsActive(false);
            }
        } else {
            console.error('BasketId is not available.');
        }
    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image style={{ width: 300 }} thumbnail src={process.env.REACT_APP_API_URL + item.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center' style={{ color: 'grey' }}>
                        <h2>{item.name}</h2>
                        <h3>{item.brand}</h3>
                        <div className='d-flex mt-1 align-items-center justify-content-center' style={{ fontSize: 'X-Large', background: `url(${star}) no-repeat center center`, width: 150, height: 150, backgroundSize: 'cover' }}>{item.rating}</div>
                    </Row>
                </Col>
                <Col className='mt-5' md={4}>
                    <Card>
                        <h3>{item.price} €</h3>
                        <Button
                            className={`primary-btn-to-cart ${isActive ? 'active' : ''}`}
                            style={{ background: 'white' }}
                            onClick={handleClick}
                        >
                            ADD TO CART
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
})


export default ItemPage;


