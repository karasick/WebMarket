import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {ListGroup} from "react-bootstrap";
import ActionList from "../UI/ActionList";

const CategoryList = observer(() => {
    const {categoryContext} = useContext(Context)

    const selectCategory = (category) => {
        categoryContext.setSelectedCategory(category)
    }

    const isActive = (category) => {
        return category.id === categoryContext.selectedCategory.id
    }

    return (
        <ListGroup>
            <ActionList items={categoryContext.categories}
                        actionHandler={selectCategory}
                        activeChecker={isActive}/>
        </ListGroup>
    );
});

export default CategoryList;