import React, {useContext, useState} from 'react';
import ModalForm from "../UI/ModalForm";
import {Form} from "react-bootstrap";
import {Context} from "../../index";

const BrandModalForm = ({visibleState, hideHandler}) => {
    const {brandContext} = useContext(Context)
    const [brandName, setBrandName] = useState('')

    const closeForm = () => {
        setBrandName('')
        hideHandler()
    }

    const addBrand = () => {
        brandContext.createBrand(brandName)
            .then(() => {
                closeForm()
            })
            .catch((e) => alert(e))
    }
    
    return (
        <ModalForm title={"Add Brand"}
                   visibleState={visibleState}
                   hideHandler={closeForm}
                   submitHandler={addBrand}
                   children={
                       <Form>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Brand name"
                                             value={brandName}
                                             onChange={e => setBrandName(e.target.value)}/>
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                           </Form.Group>
                       </Form>
                   }/>
    );
};

export default BrandModalForm;