import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ModalForm = ({title, children, visibleState, hideHandler, submitHandler}) => {

    return (
        <Modal show={visibleState} onHide={hideHandler} centered>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={hideHandler}>Cancel</Button>
                <Button variant={"outline-success"} onClick={submitHandler}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForm;