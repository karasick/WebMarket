import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import {Context} from "../../index";
import ProductItem from "./ProductItem";
import {observer} from "mobx-react-lite";

const ProductGrid = observer(() => {
    const {productContext} = useContext(Context)

    return (
        <Row className={"d-flex g-3"}>
            {productContext.products.map(product =>
                <Col key={product.id} xl={3} lg={4} md={4} sm={6}>
                    <ProductItem product={product}/>
                </Col>
            )}
        </Row>
    );
});

export default ProductGrid;