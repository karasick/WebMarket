import React, {useState} from 'react';
import {Button, Card, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/paths";
import AuthService from "../api/AuthService";

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        const response = await AuthService.login(email, password)
        console.log(response)
    }

    const register = async () => {
        const response = await AuthService.register(email, password)
        console.log(response)
    }

    return (
        <Container className={"mt-5 d-flex justify-content-center align-content-center"}>
            <Card className={"p-4"} style={{width: 600}}>
                <Form className={"d-flex flex-column"}>
                    {isLogin ? <h2>Login</h2> : <h2>Registration</h2>}
                    <br/>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Enter email"
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    {isLogin ?
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" checked={true} disabled/>
                        </Form.Group> : ''}
                    <div className={"d-flex justify-content-between"}>

                        {isLogin ?
                            <div>No account yet ? <Link to={REGISTRATION_ROUTE}>Simply register!</Link></div> :
                            <div>Already have account ? <Link to={LOGIN_ROUTE}>Login!</Link></div>}

                        {isLogin ?
                            <Button variant="primary" onClick={login}>Login</Button>
                            : <Button variant="primary" onClick={register}>Register</Button>}
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;