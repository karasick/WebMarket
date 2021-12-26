import {useMemo} from "react";
import {PAGES_ELLIPSIS} from "../utils/consts";

export const usePagination = (posts, totalPages) => {
    const pagesArray = useMemo(() => {
        let result = []
        for(let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }

        return result;
    }, [totalPages]);

    return pagesArray;
}

export const useEllipsisPagination = (totalPages, activePage) => {
    const pagesWithEllipsis = useMemo(() => {
        const result = paginationWithEllipsis(activePage, totalPages)

        return result;
    }, [totalPages, activePage]);

    return pagesWithEllipsis;
}

function paginationWithEllipsis(current, last) {
    let deltaSide = 2;
    let left = current - deltaSide;
    let right = current + deltaSide + 1;

    let range = [];

    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
            range.push(i);
        }
    }

    let rangeWithEllipsis = [];
    let prevIndex;

    for (let index of range) {
        if (prevIndex) {
            if (index - prevIndex === 2) {
                rangeWithEllipsis.push(prevIndex + 1);
            } else if (index - prevIndex !== 1) {
                rangeWithEllipsis.push(PAGES_ELLIPSIS);
            }
        }
        rangeWithEllipsis.push(index);
        prevIndex = index;
    }

    return rangeWithEllipsis;
}