import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';
import { ADMIN_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const [showButtons, setShowButtons] = useState(true);
    const navigate = useNavigate();
    const handleAuthClick = () => {
        user.setIsAuth(true);
        setShowButtons(true);
    }

    return (
        <Navbar expand="lg" className="bg-custom">
            <Container>
                <NavLink className="nav-link custom-nav-link" style={{ color: 'white', fontSize: 'XXX-large' }} to={SHOP_ROUTE}>Kuz Perfumes</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav custom-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className=''>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <div>
                        {user.isAuth ? (
                            showButtons && (<>
                                <Button className="primary-btn1 m-2" variant="outline-primary" onClick={() => navigate(LOGIN_ROUTE)} style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }}>Authorization</Button>
                                <Button className="primary-btn2 m-2" variant="outline-primary" onClick={() => navigate(ADMIN_ROUTE)} style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }}>Admin panel</Button>
                            </>)
                        ) : (
                            <Button
                                className="secondary-btn m-2"
                                variant="outline-primary"
                                onClick={handleAuthClick}
                                style={{ borderColor: 'var(--bs-4)', color: 'var(--bs-4)' }}
                            >
                                Authorization
                            </Button>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;





