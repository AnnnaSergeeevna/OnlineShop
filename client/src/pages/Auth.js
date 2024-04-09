import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: `calc(100vh - 200px)` }}>
            <Card style={{ width: 400 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Add email'>
                    </Form.Control>
                    <Form.Control
                        className='mt-3'
                        placeholder='Add password'>
                    </Form.Control>
                    <div className='d-flex justify-content-between'>
                        {isLogin ?
                            <NavLink to={REGISTRATION_ROUTE} className='custom-link mt-3'>Create new account</NavLink> :
                            <NavLink to={LOGIN_ROUTE} className='custom-link mt-3'>Log in</NavLink>}

                        <Button className="primary-btn3 mt-3" variant="outline-primary">
                            {isLogin ? 'Log in' : 'Create new account'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Auth;
