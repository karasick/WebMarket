import React from 'react';
import {Container, Pagination} from "react-bootstrap";
import {PAGES_ELLIPSIS} from "../../../utils/consts";

const EllipsisPagination = ({pagesArray, activePage, pageHandler, ...props}) => {

    if(pagesArray.length <= 0) {
        return ('')
    }

    const lastPage = pagesArray[pagesArray.length - 1];

    const getPaginationComponent = (page, index) => {
        switch (page) {
            case activePage: {
                return <Pagination.Item active key={index}>{page}</Pagination.Item>
            }
            case PAGES_ELLIPSIS: {
                return <Pagination.Ellipsis key={index} disabled/>
            }
            default: {
                return <Pagination.Item key={index} onClick={(() => pageHandler(page))}>{page}</Pagination.Item>
            }
        }
    }

    return (
        <Container className={"my-4 pb-3"}>
            <Pagination className={"justify-content-center"}>
                {(activePage !== 1)
                    ? <Pagination.First onClick={(() => pageHandler(1))}/> : ''
                }
                {(activePage !== 1)
                    ? <Pagination.Prev onClick={(() => pageHandler(activePage - 1))}/> : ''
                }
                {pagesArray.map(getPaginationComponent)}
                {(activePage !== lastPage)
                    ? <Pagination.Next onClick={(() => pageHandler(activePage + 1))}/> : ''
                }
                {(activePage !== lastPage)
                    ? <Pagination.Last onClick={(() => pageHandler(lastPage))}/> : ''
                }
            </Pagination>
        </Container>
    );
};

export default EllipsisPagination;