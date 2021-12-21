import React from 'react';
import ModalForm from "../UI/ModalForm";
import {Form} from "react-bootstrap";

const BrandModalForm = ({visibleState, hideHandler, submitHandler}) => {
    return (
        <ModalForm title={"Add Brand"}
                   visibleState={visibleState}
                   hideHandler={hideHandler}
                   submitHandler={submitHandler}
                   children={
                       <Form>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Brand name" />
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                           </Form.Group>
                       </Form>
                   }/>
    );
};

export default BrandModalForm;