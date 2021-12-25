import React, {useContext} from 'react';
import {Context} from "../../index";
import {Container, Nav, Navbar, Offcanvas, Spinner} from "react-bootstrap";
import {HOME_ROUTE} from "../../utils/paths";
import {Link} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import NavAuthButton from "./Nav/NavAuthButton";
import NavAdminPanelLink from "./Nav/NavAdminPanelLink";

const NavBar = observer (() => {
    const {appContext, userContext} = useContext(Context)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className={"navbar-brand"} to={HOME_ROUTE}>Web Market</Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Nav className="me-auto d-none d-lg-flex d-xl-flex">
                    {userContext.isAuth ? <NavAdminPanelLink/> : ''}
                </Nav>
                {appContext.isLoading ? <Spinner className="ml-auto d-none d-lg-flex d-xl-flex" animation={"grow"}></Spinner> :
                    <Nav className="ml-auto d-none d-lg-flex d-xl-flex">
                        <NavAuthButton isAuth={userContext.isAuth}/>
                    </Nav>
                }
                {appContext.isLoading ? '' :
                <Navbar.Offcanvas id="offcanvasNavbar" className={"navbar-light"} aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Web Market</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {userContext.isAuth ?
                                <li className="nav-item"><NavAdminPanelLink/></li> : ''}
                        </ul>
                        <NavAuthButton isAuth={userContext.isAuth}/>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>}
            </Container>
        </Navbar>
    );
});

export default NavBar;