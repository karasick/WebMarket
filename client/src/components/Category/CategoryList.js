import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import ActionList from "../UI/ActionList";
import {selectHandler} from "../../utils/handlers";

const CategoryList = observer(() => {
    const {categoryContext, productContext} = useContext(Context)

    const selectCategory = (category) => {
        productContext.setPage(1)
        categoryContext.setSelectedCategory(category)
    }

    const unselectCategory = (category) => {
        if(categoryContext.selectedCategory === category)
            categoryContext.setSelectedCategory({})
    }

    const isActive = (category) => {
        return category.id === categoryContext.selectedCategory.id
    }

    return (
        <ListGroup>
            <ActionList items={categoryContext.categories}
                        actionHandler={(category) => selectHandler(category, categoryContext.selectedCategory,
                            selectCategory, unselectCategory)}
                        activeChecker={isActive}/>
        </ListGroup>
    );
});

export default CategoryList;