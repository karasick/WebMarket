import React from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const ActionList = observer(({items, actionHandler, activeChecker}) => {
    return (
        <ListGroup className={"mb-4"}>
            {items.map(item =>
                <ListGroup.Item key={item.id}
                                action
                                active={activeChecker(item)}
                                onClick={() => actionHandler(item)}>
                    {item.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default ActionList;