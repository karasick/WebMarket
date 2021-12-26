import React, {useContext, useState} from 'react';
import ModalForm from "../UI/ModalForm";
import {Form} from "react-bootstrap";
import {Context} from "../../index";

const CategoryModalForm = ({visibleState, hideHandler}) => {
    const {categoryContext} = useContext(Context)
    const [categoryName, setCategoryName] = useState('')

    const closeForm = () => {
        setCategoryName('')
        hideHandler()
    }

    const addCategory = () => {
        categoryContext.createCategory(categoryName)
            .then(() => {
                closeForm()
            })
            .catch((e) => alert(e))
    }

    return (
        <ModalForm title={"Add Category"}
                   visibleState={visibleState}
                   hideHandler={closeForm}
                   submitHandler={addCategory}
                   children={
                       <Form>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Category name"
                                             value={categoryName}
                                             onChange={e => setCategoryName(e.target.value)}/>
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                           </Form.Group>
                       </Form>
                   }/>
    );
};

export default CategoryModalForm;