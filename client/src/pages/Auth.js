import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (!email || !password) {
                console.log("Email or password is empty");
                return;
            }
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
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
})

export default Auth;

