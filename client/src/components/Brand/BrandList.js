import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import ActionList from "../UI/ActionList";
import {selectHandler} from "../../utils/handlers";

const BrandList = observer(() => {
    const {brandContext, productContext} = useContext(Context)

    const selectBrand = (brand) => {
        productContext.setPage(1)
        brandContext.setSelectedBrand(brand)
    }

    const unselectBrand = (brand) => {
        if(brandContext.selectedBrand === brand)
            brandContext.setSelectedBrand({})
    }

    const isActive = (category) => {
        return category.id === brandContext.selectedBrand.id
    }

    return (
        <ListGroup>
            <ActionList items={brandContext.brands}
                        actionHandler={(brand) => selectHandler(brand, brandContext.selectedBrand,
                            selectBrand, unselectBrand)}
                        activeChecker={isActive}/>
        </ListGroup>
    );
});

export default BrandList;