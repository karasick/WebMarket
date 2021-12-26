import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryList from "../components/Category/CategoryList";
import BrandList from "../components/Brand/BrandList";
import ProductGrid from "../components/Product/ProductGrid";
import {Context} from "../index";
import BrandService from "../api/BrandService";
import CategoryService from "../api/CategoryService";
import ProductService from "../api/ProductService";
import {observer} from "mobx-react-lite";
import EllipsisPagination from "../components/UI/Pagination/EllipsisPagination";
import {useEllipsisPagination} from "../hooks/usePagination";
import {getPageCount} from "../utils/pages";

const Market = observer(() => {
    const {brandContext, categoryContext, productContext} = useContext(Context)

    const [totalPages, setTotalPages] = useState(0)
    const pagesArray = useEllipsisPagination(totalPages, productContext.page)

    const fetchBrands = () => {
        BrandService.getAll()
            .then((brands) => brandContext.setBrands(brands))
            .catch((e) => console.log(e))
    }

    const fetchCategories = () => {
        CategoryService.getAll()
            .then((categories) => categoryContext.setCategories(categories))
            .catch((e) => console.log(e))
    }

    const fetchProducts = () => {
        ProductService.getAll(categoryContext.selectedCategory.id, brandContext.selectedBrand.id,
            productContext.page, productContext.limitPerPage)
            .then((products) => {
                productContext.setProducts(products.rows)
                productContext.setTotalCount(products.count)
                setTotalPages(getPageCount(productContext.totalCount, productContext.limitPerPage))
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        fetchBrands()
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [productContext.page, brandContext.selectedBrand, categoryContext.selectedCategory])

    const changePage = (page) => {
        productContext.setPage(page)
        // fetchPostsAndReplace(limitPosts, page)
    }

    return (
        <Container className={"mt-5"}>
            <Row>
                <Col lg={3}>
                    <CategoryList/>
                    <BrandList/>
                </Col>
                <Col lg={9}>
                    <ProductGrid/>
                    <EllipsisPagination pagesArray={pagesArray} activePage={productContext.page} pageHandler={changePage}/>
                </Col>
            </Row>
        </Container>
    );
});

export default Market;