import React from 'react';
import {Button} from "react-bootstrap";

const NavButton = ({title, clickHandler}) => {
    return (
        <Button className={"float-right"} variant="outline-primary" onClick={clickHandler}>{title}</Button>
    );
};

export default NavButton;