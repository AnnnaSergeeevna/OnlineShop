import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from '../http/userAPI';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (!email || !password) {
            console.log("Email or password is empty");
            return;
        }
        if (isLogin) {
            const response = await login(email, password);
            console.log(response);
        } else {
            const response = await registration(email, password);
            console.log(response);
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: `calc(100vh - 200px)` }}>
            <Card style={{ width: 400 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Add email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Add password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <div className='d-flex justify-content-between'>
                        {isLogin ?
                            <NavLink to={REGISTRATION_ROUTE} className='custom-link mt-3'>Create new account</NavLink> :
                            <NavLink to={LOGIN_ROUTE} className='custom-link mt-3'>Log in</NavLink>}

                        <Button className="mt-3"
                            onClick={click}>
                            {isLogin ? 'Log in' : 'Create new account'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;

