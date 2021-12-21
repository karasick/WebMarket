import React from 'react';
import {Button, Card, Col, Container, Image, ListGroup, Row, Table} from "react-bootstrap";

const Product = () => {
    const product = {id: 1, name: "Product 1", price: 1000, rating: 1, image: "https://via.placeholder.com/400x300"}
    const specifications = [
        {id: 1, title: "Specification 1", description: "Value 1"},
        {id: 2, title: "Specification 2", description: "Value 2"},
        {id: 3, title: "Specification 3", description: "Value 3"},
        {id: 4, title: "Specification 4", description: "Value 4"},
        {id: 5, title: "Specification 5", description: "Value 5"},
        {id: 6, title: "Specification 6", description: "Value 6"},
    ]

    return (
        <Container className={"mt-5"}>
            <h2>{product.name}</h2>
            <div className={"d-flex align-content-center"}>
                <span className={"px-1"} >{product.rating}</span>
                <i className="bi bi-star"></i>
            </div>
            <Row className={"pt-4 g-4"}>
                <Col md={8} className={"d-flex justify-content-center"}>
                    <Image className={"text-center"} src={product.image} fluid/>
                </Col>
                <Col md={4} className={"align-self-center"}>
                    <Card className={"d-flex align-items-center justify-content-around"}>
                        <h3 className={"m-4"}>${product.price}</h3>
                        <Button className={"m-4"} variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <h4 className={"pt-4 pb-1"}>Specifications:</h4>
            <Table striped hover>
                <tbody>
                {specifications.map(specification =>
                    <tr key={specification.id}>
                        <td>{specification.title}</td>
                        <td>{specification.description}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            <ListGroup variant="flush">
            </ListGroup>
        </Container>
    );
};

export default Product;