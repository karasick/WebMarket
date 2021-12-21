import React, {useContext} from 'react';
import {Context} from "../../index";
import {Button, Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {ADMIN_PANEL_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../../utils/paths";
import {Link} from 'react-router-dom';
import {observer} from "mobx-react-lite";

const NavBar = observer (() => {
    const {userContext} = useContext(Context)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className={"navbar-brand"} to={HOME_ROUTE}>Web Market</Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Nav className="me-auto d-none d-lg-flex d-xl-flex">
                    {userContext.isAuth ?
                        <Link className={"nav-link"} to={ADMIN_PANEL_ROUTE}>Admin Panel</Link> : ''}
                </Nav>
                <Nav className="ml-auto d-none d-lg-flex d-xl-flex">
                    {userContext.isAuth ?
                        <Button className={"float-right"} variant="outline-primary" onClick={() => userContext.setIsAuth(false)}>Logout</Button> :
                        <Button className={"float-right"} variant="outline-primary" onClick={() => userContext.setIsAuth(true)}>Login</Button> }
                </Nav>
                <Navbar.Offcanvas id="offcanvasNavbar" className={"navbar-light"} aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Web Market</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {userContext.isAuth ?
                                <li className="nav-item"><Link className={"nav-link"} to={ADMIN_PANEL_ROUTE}>Admin Panel</Link></li> : ''}
                        </ul>
                        {userContext.isAuth ?
                            <Button className={"mt-2"} variant="outline-primary" onClick={() => userContext.setIsAuth(false)}>Logout</Button> :
                            <Button className={"mt-2"} variant="outline-primary" onClick={() => userContext.setIsAuth(true)}>Login</Button>}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
});

export default NavBar;