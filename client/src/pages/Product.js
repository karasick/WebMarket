import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, ListGroup, Row, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import ProductService from "../api/ProductService";
import {API_URL} from "../http";
import {Context} from "../index";

const Product = () => {
    // const {appContext} = useContext(Context)
    const [product, setProduct] = useState({specifications: []})

    const {id} = useParams()

    useEffect(() => {
        ProductService.getOne(id)
            .then((product) => setProduct(product))
            .catch((e) => {
                console.error(e)
                if(e.response.data.message)
                    console.error(e.response.data.message)
            })
    }, [])



    return (
        <Container className={"mt-5"}>
            <h2>{product.name}</h2>
            <div className={"d-flex align-content-center"}>
                <span className={"px-1"} >{product.rating}</span>
                <i className="bi bi-star"></i>
            </div>
            <Row className={"pt-4 g-4"}>
                <Col md={8} className={"d-flex justify-content-center"}>
                    <Image className={"text-center"} src={API_URL + product.image} fluid/>
                </Col>
                <Col md={4} className={"align-self-center"}>
                    <Card className={"d-flex align-items-center justify-content-around"}>
                        <h3 className={"m-4"}>${product.price}</h3>
                        <Button className={"m-4"} variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            {product.specifications?.length <= 0 ? '' :
                <h4 className={"pt-4 pb-1"}>Specifications:</h4>
            }
            <Table striped hover>
                <tbody>
                {product.specifications.map(specification =>
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