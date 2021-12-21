import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import BrandModalForm from "../components/Brand/BrandModalForm";
import CategoryModalForm from "../components/Category/CategoryModalForm";
import ProductModalForm from "../components/Product/ProductModalForm";

const AdminPanel = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    return (
        <Container className={"mt-5"}>
            <Row className={"g-5"}>
                <Col className={"cop-4"}>
                    <Button className={"w-100"}
                            onClick={() => setCategoryVisible(true)}
                            variant={"outline-dark"}>
                        Add Category
                    </Button>
                </Col>
                <Col className={"cop-4"}>
                    <Button className={"w-100"}
                            onClick={() => setBrandVisible(true)}
                            variant={"outline-dark"}>
                        Add Brand
                    </Button>
                </Col>
                <Col className={"cop-4"}>
                    <Button className={"w-100"}
                            onClick={() => setProductVisible(true)}
                            variant={"outline-dark"}>
                        Add Product
                    </Button>
                </Col>
            </Row>
            <CategoryModalForm visibleState={categoryVisible} hideHandler={() => setCategoryVisible(false)}/>
            <BrandModalForm visibleState={brandVisible} hideHandler={() => setBrandVisible(false)}/>
            <ProductModalForm visibleState={productVisible} hideHandler={() => setProductVisible(false)}/>
        </Container>
    );
};

export default AdminPanel;