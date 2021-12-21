import React from 'react';
import ModalForm from "../UI/ModalForm";
import {Form} from "react-bootstrap";

const CategoryModalForm = ({visibleState, hideHandler, submitHandler}) => {
    return (
        <ModalForm title={"Add Category"}
                   visibleState={visibleState}
                   hideHandler={hideHandler}
                   submitHandler={submitHandler}
                   children={
                       <Form>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Category name" />
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                           </Form.Group>
                       </Form>
                   }/>
    );
};

export default CategoryModalForm;