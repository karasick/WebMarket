import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import ActionList from "../UI/ActionList";

const BrandList = observer(() => {
    const {brandContext} = useContext(Context)

    const selectBrand = (brand) => {
        brandContext.setSelectedBrand(brand)
    }

    const isActive = (category) => {
        return category.id === brandContext.selectedBrand.id
    }

    return (
        <ListGroup>
            <ActionList items={brandContext.brands}
                        actionHandler={selectBrand}
                        activeChecker={isActive}/>
        </ListGroup>
    );
});

export default BrandList;