import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/paths";
import {API_URL} from "../../http";

const ProductItem = ({product}) => {

    return (
        <Link to={PRODUCT_ROUTE + "/" + product.id} style={{color: "initial", textDecoration: "none"}}>
            <Card>
                <div className={"m-2 d-flex justify-content-center"} style={{height: "300px", overflow: "hidden"}}>
                    <Card.Img className={"card-img-top"} variant="top"
                              src={API_URL + product.image} style={{width: "100%", minHeight: "300px", objectFit: "contain"}}/>
                </div>
                <Card.Body>
                    {/*<Card.Title>{product.name}</Card.Title>*/}
                    <div className={"d-flex justify-content-between"}>
                            <span className={"lh-1 text-break text-muted align-self-center"}>
                                {"BrandName"}
                            </span>
                        <div className={"d-flex align-content-center"}>
                            <span className={"px-1"} >{product.rating}</span>
                            <i className="bi bi-star"></i>
                        </div>
                    </div>
                    <span>{product.name}</span>
                </Card.Body>
                </Card>
        </Link>
    );
};

export default ProductItem;