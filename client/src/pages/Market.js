import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryList from "../components/Category/CategoryList";
import BrandList from "../components/Brand/BrandList";
import ProductGrid from "../components/Product/ProductGrid";

const Market = () => {
    return (
        <Container className={"mt-5"}>
            <Row>
                <Col lg={3}>
                    <CategoryList/>
                    <BrandList/>
                </Col>
                <Col lg={9}>
                    <ProductGrid/>
                </Col>
            </Row>
        </Container>
    );
};

export default Market;