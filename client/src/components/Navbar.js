import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';


const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar expand="lg" className="bg-custom">
            <Container>
                <NavLink className="nav-link custom-nav-link" style={{ color: 'black', fontSize: 'XX-large' }} to={SHOP_ROUTE}>Kuz Perfumes</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav custom-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    <div className="ml-auto">
                        {user.isAuth ?
                            <>
                                <Button className="primary-btn mr-4" variant="outline-primary">Authorization</Button>
                                <Button className="primary-btn m-4" variant="outline-primary">Admin panel</Button>
                            </>

                            :
                            <Button className="secondary-btn mr-4" variant="outline-primary" onClick={() => user.setIsAuth(true)}>Authorization</Button>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
});

export default NavBar;




