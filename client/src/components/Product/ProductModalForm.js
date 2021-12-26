import React, {useContext, useState} from 'react';
import ModalForm from "../UI/ModalForm";
import {Button, Dropdown, Form, Table} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const ProductModalForm = observer(({visibleState, hideHandler, submitHandler}) => {
    const {categoryContext, brandContext, productContext} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
    const [productBrand, setProductBrand] = useState(null)
    const [productCategory, setProductCategory] = useState(null)
    const [specifications, setSpecifications] = useState([])

    const selectFile = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const addSpecification = () => {
        setSpecifications([...specifications, {
            title: '',
            description: '',
            localId: Date.now()
        }])
    }

    const changeSpecifications = (key, value, localId) => {
        setSpecifications(specifications.map(i => i.localId === localId ? {...i, [key]: value} : i))
    }

    const closeForm = () => {
        setName('')
        setDescription('')
        setPrice(0)
        setImage(null)
        setProductBrand(null)
        setProductCategory(null)
        setSpecifications([])

        hideHandler()
    }

    const addProduct = () => {
        const productData = new FormData()
        productData.append('name', name)
        productData.append('description', description)
        productData.append('categoryId', productCategory.id)
        productData.append('brandId', productBrand.id)
        productData.append('price', `${price}`)
        productData.append('image', image)
        productData.append('specifications', JSON.stringify(specifications))

        productContext.createProduct(productData)
            .then(() => {
                closeForm()
            })
            .catch((e) => alert(e))
    }

    const removeSpecification = (localId) => {
        setSpecifications(specifications.filter(specification => specification.localId !== localId))
    }

    return (
        <ModalForm title={"Add Product"}
                   visibleState={visibleState}
                   hideHandler={closeForm}
                   submitHandler={addProduct}
                   children={
                       <Form>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Control type="text" placeholder="Product name"
                                             value={name}
                                             onChange={(e) => setName(e.target.value)}/>
                               <Form.Text className="text-muted">
                                   It should be unique.
                               </Form.Text>
                               <Dropdown className={"mt-3"}>
                                   <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className={""}>
                                       {productCategory ? productCategory.name : "Choose Category"}
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       {categoryContext.categories.map(category =>
                                           <Dropdown.Item key={category.id}
                                                          active={category === productCategory}
                                                          onClick={() => setProductCategory(category)}>
                                               {category.name}
                                           </Dropdown.Item>
                                       )}
                                   </Dropdown.Menu>
                               </Dropdown>
                               <Dropdown className={"mt-3"}>
                                   <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className={""}>
                                       {productBrand ? productBrand.name : "Choose Brand"}
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       {brandContext.brands.map(brand =>
                                           <Dropdown.Item key={brand.id}
                                                          active={brand === productBrand}
                                                          onClick={() => setProductBrand(brand)}>
                                               {brand.name}
                                           </Dropdown.Item>
                                       )}
                                   </Dropdown.Menu>
                               </Dropdown>
                               <Form.Control className={"mt-3"} type="text" placeholder="Product description"
                                             value={description}
                                             onChange={(e) => setDescription(e.target.value)}/>
                               <Form.Control className={"mt-3"} type="number" placeholder="Product price"
                                             value={price}
                                             onChange={(e) => setPrice(Number(e.target.value))}/>
                               <Form.Text className="text-muted">
                                   Product price.
                               </Form.Text>
                               <Form.Control className={"mt-3"} type="file" placeholder="Product image"
                                             onChange={selectFile}/>
                               <Button className={"mt-3"} variant={"outline-dark"} onClick={addSpecification}>
                                   Add Specification
                               </Button>
                               {specifications.length !== 0 ?
                                   <Table className={"mt-3"}>
                                       <tbody>
                                       {specifications.map(specification =>
                                           <tr key={specification.localId}>
                                               <td>
                                                   <Form.Control placeholder="Title"
                                                                 value={specification.title}
                                                                 onChange={(e) =>
                                                                     changeSpecifications('title',
                                                                         e.target.value, specification.localId)
                                                                 }
                                                   />
                                               </td>
                                               <td>
                                                   <Form.Control placeholder="Description"
                                                                 value={specification.description}
                                                                 onChange={(e) =>
                                                                     changeSpecifications('description',
                                                                         e.target.value, specification.localId)
                                                                 }
                                                   />
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
});

export default ProductModalForm;