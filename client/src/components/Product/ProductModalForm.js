import React, {useContext, useState} from 'react';
import ModalForm from "../UI/ModalForm";
import {Button, Dropdown, Form, Table} from "react-bootstrap";
import {Context} from "../../index";

const ProductModalForm = ({visibleState, hideHandler, submitHandler}) => {
    const {categoryContext, brandContext} = useContext(Context)
    const [specifications, setSpecifications] = useState([])

    const addSpecification = () => {
        setSpecifications([...specifications, {
            title: '',
            description: '',
            localId: Date.now()
        }])
    }

    const removeSpecification = (localId) => {
        setSpecifications(specifications.filter(specification => specification.localId !== localId))
    }

    return (
        <ModalForm title={"Add Product"}
                   visibleState={visibleState}
                   hideHandler={hideHandler}
                   submitHandler={submitHandler}
                   children={
                       <Form>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Product name" />
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                               <Dropdown className={"mt-3"}>
                                   <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className={""}>
                                       Choose Category
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       {categoryContext.categories.map(category =>
                                           <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
                                       )}
                                   </Dropdown.Menu>
                               </Dropdown>
                               <Dropdown className={"mt-3"}>
                                   <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className={""}>
                                       Choose Brand
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       {brandContext.brands.map(brand =>
                                           <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                       )}
                                   </Dropdown.Menu>
                               </Dropdown>
                               <Form.Control className={"mt-3"} type="number" placeholder="Product price" />
                               <Form.Control className={"mt-3"} type="file" placeholder="Product image" />
                               <Button className={"mt-3"} variant={"outline-dark"} onClick={addSpecification}>
                                   Add Specification
                               </Button>
                               {specifications.length !== 0 ?
                                   <Table className={"mt-3"}>
                                       <tbody>
                                       {specifications.map(specification =>
                                           <tr key={specification.localId}>
                                               <td>
                                                   <Form.Control placeholder="Title" />
                                               </td>
                                               <td>
                                                   <Form.Control placeholder="Description" />
                                               </td>
                                               <td>
                                                   <Button variant={"outline-danger"}
                                                           onClick={() => removeSpecification(specification.localId)}>
                                                       <i className="bi bi-x"></i>
                                                   </Button>
                                               </td>
                                           </tr>
                                       )}
                                       </tbody>
                                   </Table>
                                   : '' }
                           </Form.Group>
                       </Form>}/>
    );
};

export default ProductModalForm;