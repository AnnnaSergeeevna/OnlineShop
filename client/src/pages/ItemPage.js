import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Image, Button } from 'react-bootstrap';
import star from './../assets/Black_star.svg.png';
import '../Bootstrap.css';
import { useParams } from 'react-router-dom';
import { fetchItem } from '../http/itemAPI';

const ItemPage = () => {
    const [item, setItem] = useState({ info: [] });
    const [isActive, setIsActive] = useState(false);


    const { id } = useParams()
    useEffect(() => {
        fetchItem(id).then(data => setItem(data))
    }, [])
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
                            // variant="outline-primary"
                            style={{ background: 'white' }}
                            onClick={() => setIsActive(true)}
                        >
                            ADD TO CART
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemPage;
